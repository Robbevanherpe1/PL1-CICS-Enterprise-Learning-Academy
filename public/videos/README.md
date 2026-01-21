# Videos Folder

Place your video files (`.mp4`, `.mov`, `.webm`, `.avi`, `.mkv`) in this folder.

## Usage

1. Add your video file to this folder (e.g., `theory-intro.mp4`)
2. Reference it in your course JSON file by filename:

```json
"theory": {
  "content": "...",
  "video": "theory-intro.mp4",
  "keyConcepts": [...]
}
```

## Supported Formats

- MP4 (`.mp4`) - Recommended
- MOV (`.mov`)
- WebM (`.webm`)
- AVI (`.avi`)
- MKV (`.mkv`)

## File Naming Tips

- Use descriptive names: `pl1-basics-intro.mp4`
- Use hyphens instead of spaces
- Keep filenames lowercase for consistency

## Example Structure

```
public/videos/
  pl1-basics-intro.mp4
  cics-overview.mov
  exercise-demo.mp4
  ...
```
