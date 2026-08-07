#!/usr/bin/env node

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const SITE_ROOT = resolve(".");
const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "127.0.0.1";
const API_KEY = process.env.VOCAL_BRIDGE_API_KEY;
const AGENT_ID = process.env.VOCAL_BRIDGE_AGENT_ID;

if (!API_KEY) throw new Error("VOCAL_BRIDGE_API_KEY is missing from .env");
if (!AGENT_ID) throw new Error("VOCAL_BRIDGE_AGENT_ID is missing from .env");

const MIME = {
  ".css": "text/css; charset=utf-8", ".gif": "image/gif", ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon", ".jpeg": "image/jpeg", ".jpg": "image/jpeg", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".md": "text/markdown; charset=utf-8", ".mp3": "audio/mpeg",
  ".png": "image/png", ".svg": "image/svg+xml", ".wav": "audio/wav",
};

function sendJson(response, status, value) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(value));
}

async function issueVoiceToken(request, response) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 8192) return sendJson(response, 413, { error: "request_too_large" });
  }

  let participantName = "Anxiety Demo Player";
  if (body) {
    try {
      const parsed = JSON.parse(body);
      if (typeof parsed.participant_name === "string" && parsed.participant_name.trim()) {
        participantName = parsed.participant_name.trim().slice(0, 80);
      }
    } catch {
      return sendJson(response, 400, { error: "invalid_json" });
    }
  }

  try {
    const upstream = await fetch("https://vocalbridgeai.com/api/v1/token", {
      method: "POST",
      headers: { "X-API-Key": API_KEY, "X-Agent-Id": AGENT_ID, "Content-Type": "application/json" },
      body: JSON.stringify({ participant_name: participantName }),
    });
    const payload = await upstream.json().catch(() => ({ error: "invalid_upstream_response" }));
    if (!upstream.ok) return sendJson(response, upstream.status, { error: "voice_token_failed", status: upstream.status });
    if (!payload.url && payload.livekit_url) payload.url = payload.livekit_url;
    return sendJson(response, 200, payload);
  } catch (error) {
    console.error("Vocal Bridge token request failed", error?.message || error);
    return sendJson(response, 502, { error: "voice_service_unreachable" });
  }
}

function serveStatic(request, response) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host || "localhost"}`).pathname);
  } catch {
    response.writeHead(400); return response.end("Bad request");
  }
  const relative = normalize(pathname).replace(/^([/\\])+/, "") || "index.html";
  const file = resolve(join(SITE_ROOT, relative));
  if (file !== SITE_ROOT && !file.startsWith(SITE_ROOT + sep)) {
    response.writeHead(403); return response.end("Forbidden");
  }
  const target = existsSync(file) && statSync(file).isDirectory() ? join(file, "index.html") : file;
  if (!existsSync(target) || !statSync(target).isFile()) {
    response.writeHead(404); return response.end("Not found");
  }
  response.writeHead(200, {
    "Content-Type": MIME[extname(target).toLowerCase()] || "application/octet-stream",
    "Cache-Control": target.endsWith(".html") || target.endsWith(".js") ? "no-cache" : "public, max-age=3600",
  });
  if (request.method === "HEAD") return response.end();
  createReadStream(target).pipe(response);
}

const server = createServer(async (request, response) => {
  if (request.method === "POST" && request.url === "/api/voice-token") return issueVoiceToken(request, response);
  if (request.method === "GET" || request.method === "HEAD") return serveStatic(request, response);
  response.writeHead(405, { Allow: "GET, HEAD, POST" }); response.end("Method not allowed");
});

server.listen(PORT, HOST, () => {
  console.log(`Anxiety voice demo running at http://${HOST}:${PORT}`);
  console.log(`Vocal Bridge agent: ${AGENT_ID}`);
});
