# Course Content Structure

All course content is stored in JSON files in each course folder. Each course has an `index.json` file that contains all the course data.

## JSON Structure

```json
{
  "id": "course-id",
  "title": "Course Title",
  "description": "Course description",
  "simple": true/false,
  "chapters": [
    {
      "title": "Chapter Title",
      "parts": ["Theory", "Exercise", "Final Quiz"],
      "theory": {
        "content": "Theory content text...",
        "video": "https://youtube.com/embed/VIDEO_ID or null",
        "keyConcepts": [
          "Concept 1",
          "Concept 2"
        ]
      },
      "exercise": {
        "instructions": "Exercise instructions...",
        "hint": "Optional hint text",
        "answer": "PROC OPTIONS(MAIN);\n  /* Correct answer code */\nENDPROC;",
        "video": "https://youtube.com/embed/VIDEO_ID or null"
      },
      "quiz": {
        "questions": [
          {
            "id": 1,
            "question": "Question text?",
            "options": [
              "Option A",
              "Option B",
              "Option C",
              "Option D"
            ],
            "correct": 0
          }
        ]
      }
    }
  ],
  "resources": [
    { "label": "Resource Name", "url": "https://..." }
  ]
}
```

## Adding Videos

To add a video to theory or exercise sections, use the `video` field:

- **YouTube**: Use embed URL format: `https://www.youtube.com/embed/VIDEO_ID`
- **Other platforms**: Use the embed URL provided by the platform
- **No video**: Set to `null`

Example:
```json
"theory": {
  "content": "...",
  "video": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "keyConcepts": [...]
}
```

## Course Types

- **Simple courses** (`"simple": true`): Have only "Overview" chapter with Theory and Final Quiz
- **Full courses** (`"simple": false`): Have multiple chapters, each with Theory, Exercise, and Final Quiz

## Editing Content

1. Navigate to the course folder (e.g., `pl1-basics/`)
2. Open `index.json`
3. Edit the content, add videos, update exercises, etc.
4. Save the file - changes will be reflected immediately

## Tips

- Use `\n` for line breaks in text content
- Quiz `correct` field uses 0-based indexing (0 = first option, 1 = second, etc.)
- Exercise answers should include complete PL/I code
- Video URLs must be embed URLs, not regular watch URLs
