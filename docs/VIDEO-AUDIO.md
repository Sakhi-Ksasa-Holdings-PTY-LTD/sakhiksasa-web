# Standpoint videos — voice & music guide

Answer to "how do I add voice or music to the videos — which is best?"

## The decision: VOICE first

Both videos now have **professional narration built in** (British-accented
male voice, mixed to broadcast loudness). Voice was chosen over music because:

1. **These are explainer videos about a system.** Voice tells the viewer what
   Standpoint *does* ("All the signals. One Standing Index."). Music alone
   sets a mood but communicates nothing — and the whole point of the redo was
   media that is about the system.
2. **Captions now match the narration word-for-word**, so the videos work
   with sound off (most social feeds autoplay muted) AND with sound on.
3. **No licensing risk.** Any music you don't own the rights to can get a
   video muted or struck on YouTube/X/Instagram. A clean voice never does.
4. **Music can still go UNDER the voice** (see below) — it's additive, not
   either/or.

## What each video says

**Intro (14s):** "This is Standpoint. A Vantage product, by Sakhi'ksasa
Holdings." → "All the signals. One Standing Index." → "Know where you stand.
Fix where you lag."

**How it works (22s):** five signals → one Standing Index out of 100 → gaps
flagged in plain English → monthly briefing → "Standpoint. Know where you
stand."

Files live in `public/standpoint-assets/video/`; silent originals are
archived at `/assets/standpoint/v2-silent/` (outside the repo).

## Want background music too?

Add a quiet music bed under the voice (10–15% volume). Free, safe sources:

- **YouTube Audio Library** (studio.youtube.com → Audio Library) — free,
  cleared for use. Filter: Ambient / Cinematic, mood: confident.
- **Pixabay Music** (pixabay.com/music) — free, no attribution required.
- Avoid commercial libraries until revenue justifies them (Epidemic Sound
  ~R150/mo is the paid fallback).

Once you have a music file (e.g. `music.mp3`), one command adds it:

```bash
ffmpeg -i standpoint_intro_16x9.mp4 -i music.mp3 \
  -filter_complex "[1:a]aloop=loop=-1:size=2e+09,atrim=0:14.3,volume=0.12[m];\
[0:a][m]amix=inputs=2:normalize=0,loudnorm=I=-16:TP=-1.5[aout]" \
  -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 128k out.mp4
```

(`volume=0.12` = music at 12% so the voice stays front; change `14.3` to the
video length.) To swap the voice itself, regenerate with a different
`--voice` via the `z-ai tts` CLI (`--voice` options: tongtong, chuichui,
xiaochen, jam, kazi, douji, luodo — `jam` is the British-English voice) and
re-run `standpoint-studio/vo-build.ts`.
