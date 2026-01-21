# Example Video Setup

## PL/I Basics Introduction Video

The PL/I Basics course is configured to use a video file named `pl1-basics-intro.mp4`.

### To add the video:

1. Place your video file in this folder (`public/videos/`)
2. Name it exactly: `pl1-basics-intro.mp4`
3. The video will automatically appear in the Introduction chapter's Theory section

### Alternative: Use YouTube Embed

If you prefer to use a YouTube video instead, edit `src/courses/pl1-basics/index.json` and change:

```json
"video": "pl1-basics-intro.mp4"
```

to:

```json
"video": "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### Supported Video Formats

- MP4 (`.mp4`) - Recommended
- MOV (`.mov`)
- WebM (`.webm`)
- AVI (`.avi`)
- MKV (`.mkv`)

The video player will automatically detect the format and display it correctly.
