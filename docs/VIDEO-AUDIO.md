# Standpoint videos — music (no voice) guide

Answer to "remove the voice in the videos and replace it with music
suitable for the videos and ad-worthy, and add captions only if needed."

## The decision: MUSIC, no voice

Both Standpoint videos now carry **ad-worthy royalty-free music** in place
of the previous voice-over. The voice tracks were stripped and replaced.

### Why music, not voice

1. **The videos carry their message visually.** The on-screen frames show
   the actual product UI — the Standing Index gauge, the five signals,
   blind-spot flags, the monthly briefing — with the brand's own text
   baked in. A voice-over was redundant; the visuals already do the
   talking.
2. **Music makes the piece feel like an ad.** A confident, cinematic bed
   under product footage is exactly the convention B2B ads use; a voice
   reading the same words the screen already shows reads like a tutorial,
   not an ad.
3. **No licensing risk.** The chosen track is CC-BY 4.0 (attribution only,
   no fee). Attribution is shown on the page next to the video.
4. **Captions not needed.** The previous caption files transcribed the
   narration word-for-word. With the narration gone, the captions would
   describe speech that no longer exists, so the `<track>` elements were
   removed and the `.vtt` files deleted. The on-screen text in the video
   frames is the message — readable muted (most social feeds autoplay
   muted anyway).

## What each video shows

- **Intro (14.3s):** Standpoint mark → the dashboard with the Standing
  Index → "All the signals. One Standing Index." → "Know where you stand.
  Fix where you lag." → close on the mark.
- **How it works (22.3s):** five signal chips converge → one 0–100
  index → blind-spot flags in plain English → the monthly briefing →
  "Standpoint. Know where you stand."

Files live in `public/standpoint-assets/video/`; the previous narrated
versions are archived at `/home/z/my-project/assets/standpoint/v3-narrated/`
(outside the repo).

## The music

- **Track:** "Long Note Two" by **Kevin MacLeod** (incompetech.com).
- **License:** Creative Commons Attribution 4.0 (CC-BY 4.0).
- **Why it fits:** ambient/cinematic, slow build, no lyrics, modern and
  minimal — reads as "intelligence / finance / professional services,"
  the right register for Standpoint's audience (SA's largest industry,
  see `docs/competitor-research.md` §0).
- **Attribution shown on the page** (next to the how-it-works video):
  > Music: "Long Note Two" — Kevin MacLeod (incompetech.com), licensed
  > under CC-BY 4.0.

## How it was mixed (for the record)

```bash
# Strip the narration; mix the music trimmed + faded + loudness-normalised.
ffmpeg -y -i standpoint_intro_16x9.mp4 -i Long_Note_Two.mp3 \
  -filter_complex "[1:a]atrim=0:14.3,asetpts=PTS-STARTPTS,afade=t=out:st=13.3:d=1.0,aresample=48000,loudnorm=I=-16:TP=-1.5[a]" \
  -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out.mp4
```

- `-map 0:v -c:v copy` keeps the video bit-for-bit (no re-encode, no
  quality loss).
- `atrim` cuts the music to the exact video length; `afade` adds a 1s
  outro fade so it doesn't cut hard; `loudnorm I=-16:TP=-1.5` normalises
  to broadcast / online-ad loudness (-16 LUFS, true-peak -1.5 dB).

## Want to swap the track later?

1. Download another CC-BY or CC0 track (see sources below).
2. Re-run the ffmpeg command above against the **original narrated**
   backup in `/home/z/my-project/assets/standpoint/v3-narrated/` (so you
   start from a clean video, not the already-mixed one).
3. Update the attribution line on `/vantage/standpoint` and in this doc.

### Free, safe music sources
- **incompetech.com** (Kevin MacLeod) — CC-BY 4.0, attribution required,
  huge catalogue; the "Cinematic / Ambient / Corporate" tags are the
  useful ones for this product.
- **YouTube Audio Library** (studio.youtube.com → Audio Library) — free,
  cleared for use, many tracks are CC0 / no-attribution.
- **Pixabay Music** (pixabay.com/music) — CC0, no attribution required.
- Avoid commercial libraries (Epidemic Sound, Artlist) until revenue
  justifies the ~R150–300/mo licence.
