import { VocalBridge } from "@vocalbridgeai/sdk";

function describeError(error) {
  const parts = [];
  let current = error;
  for (let depth = 0; current && depth < 3; depth++) {
    const value = current.message || current.name || current.code;
    if (value && !parts.includes(value)) parts.push(value);
    if (current.code && !parts.includes(current.code)) parts.push(current.code);
    current = current.cause;
  }
  return parts.join(" · ") || "unknown";
}

class VocalBridgeSTTAdapter {
  constructor() {
    this.client = null;
    this.connecting = null;
    this.connected = false;
    this.listening = false;
    this.handlers = null;
    this.listenGeneration = 0;
  }

  async connect(onStatus = () => {}) {
    if (this.connected) return true;
    if (this.connecting) return this.connecting;
    onStatus("Connecting secure voice recognition...");
    this.client = new VocalBridge({
      auth: { tokenUrl: "/api/voice-token" },
      participantName: "Anxiety Demo Player",
      autoPlayAudio: false,
    });
    this.client.on("connectionStateChanged", (state) => onStatus(state === "connected" ? "Vocal Bridge connected" : `Vocal Bridge: ${state.replaceAll("_", " ")}`));
    this.client.on("agentAction", ({ action, payload }) => {
      if (action !== "live_transcript" || !this.listening || !payload?.text) return;
      if (!payload.is_final) return this.handlers?.onInterim?.(payload.text.trim(), payload);
      const finalHandler = this.handlers?.onFinal;
      const errorHandler = this.handlers?.onError;
      this.listening = false;
      this.setMicrophone(false).catch((error) => errorHandler?.(error)).finally(() => finalHandler?.(payload.text.trim(), payload));
    });
    this.client.on("error", (error) => {
      this.handlers?.onError?.(error);
      onStatus(`Vocal Bridge error: ${describeError(error)}`);
    });
    this.connecting = this.client.connect().then(async () => {
      this.connected = true;
      await this.setMicrophone(false);
      onStatus("Vocal Bridge ready");
      return true;
    }).catch((error) => {
      this.client = null;
      this.connected = false;
      onStatus(`Vocal Bridge connection failed: ${describeError(error)}`);
      throw error;
    }).finally(() => { this.connecting = null; });
    return this.connecting;
  }

  async setMicrophone(enabled) {
    if (this.connected && this.client.isMicrophoneEnabled !== enabled) await this.client.setMicrophoneEnabled(enabled);
  }

  async prime(onStatus) {
    await this.connect(onStatus);
    return true;
  }

  async listen(handlers) {
    const generation = ++this.listenGeneration;
    await this.connect(handlers.onStatus);
    if (generation !== this.listenGeneration) return false;
    this.handlers = handlers;
    this.listening = true;
    await this.setMicrophone(true);
    if (generation !== this.listenGeneration) {
      await this.setMicrophone(false);
      return false;
    }
    handlers.onStart?.();
    return true;
  }

  async stop() {
    this.listenGeneration++;
    this.listening = false;
    this.handlers = null;
    await this.setMicrophone(false);
  }

  async disconnect() {
    this.listenGeneration++;
    this.listening = false;
    this.handlers = null;
    if (this.client) await this.client.disconnect();
    this.client = null;
    this.connected = false;
  }
}

window.VocalBridgeSTT = new VocalBridgeSTTAdapter();
