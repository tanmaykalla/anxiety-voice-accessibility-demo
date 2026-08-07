# Adventures With Anxiety — Voice Accessibility Demo

This repository demonstrates a non-invasive voice accessibility layer attached to [Nicky Case's Adventures With Anxiety](https://ncase.me/anxiety/). The original game remains authoritative: the layer observes its rendered dialogue and currently valid choices, narrates them, sends microphone audio to Vocal Bridge for speech-to-text, deterministically matches the transcript, and clicks the original game control.

This is a fan-made reference demo for the [Voice Accessibility SDK](https://github.com/tanmaykalla/voice-rpg), not an official edition of the game. The maintainer of this repository does **not** own or claim authorship of *Adventures With Anxiety*.

## Architecture

```text
Game dialogue DOM -> voice index -> audio manifest / browser TTS

Current game choices -> spoken option list
Player microphone -> Vocal Bridge STT -> deterministic matcher
                  -> original enabled game control

Observer HUD <- transcript, selected choice, STT latency, match latency
```

Vocal Bridge is the only STT path in this demo. Browser `SpeechRecognition` is not used as a fallback. TTS first uses reviewed files from `audio-manifest.js`; missing files fall back to the browser's speech synthesizer.

Vocal Bridge is replaceable: another integration can use the browser Web Speech APIs for both STT (`SpeechRecognition`, where supported) and TTS (`speechSynthesis`) by supplying browser provider adapters instead. The game-to-voice architecture and deterministic choice matcher remain the same.

## Run locally

Requirements: Node.js 20+, a Vocal Bridge API key, and a listener agent that emits `live_transcript` actions.

```bash
npm install
cp .env.example .env
```

Set `VOCAL_BRIDGE_API_KEY` and `VOCAL_BRIDGE_AGENT_ID` in `.env`, then run:

```bash
npm start
```

Open <http://localhost:8080>, click inside the game once to grant microphone access, and play normally. Say the choice text, `option one`, `option A`, and similar forms. Press `M` to listen again. The observer HUD can copy tab-separated evaluation data.

Never place a Vocal Bridge API key in client JavaScript. `server.mjs` exchanges it for a short-lived session token through `/api/voice-token`.

## Development

```bash
npm run build
npm test
```

- `voice-layer.js` observes narration and controls without changing game state directly.
- `matcher.js` can select only one of the choices currently supplied by the game.
- `src/vocalbridge-stt.entry.js` adapts the Vocal Bridge SDK and builds to `vocalbridge-stt.js`.
- `voice-index.js` maps authored dialogue to speakers.
- `audio-manifest.js` maps stable line IDs to optional prerecorded narration.

## Credits and licensing

All credit for the original game goes to its creators:

- **Nicky Case** — art, code, and writing
- **Monplaisir** — music
- **Spacie** — additional code

The original creators dedicated their work for the game to the public domain under CC0; see [LICENSE.txt](LICENSE.txt), the preserved [upstream README and full credits](UPSTREAM-README.md), and the [official game](https://ncase.me/anxiety/). The upstream credits also identify third-party sounds and a small number of copyrighted parody clips. Provider SDKs and services retain their own terms.

Voice accessibility modifications in this demo are also released under CC0.
