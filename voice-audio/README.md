# Offline voice audio

Place batch-generated MP3 files here using the stable IDs in
`../audio-manifest.json`, for example:

```text
voice-audio/act1-0123456789ab.mp3
```

Then run:

```bash
node anxiety-spike/tools/parse.mjs
node anxiety-spike/tools/sync-overlay.mjs
```

The parser marks existing files as available. The runtime preloads available
recordings and falls back to the browser's `speechSynthesis` voice for missing
files, allowing batch generation to be introduced incrementally.
