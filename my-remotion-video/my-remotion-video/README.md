# my-remotion-video

A [Remotion](https://www.remotion.dev) project (v4.0.530, from the official blank template).

## Rendering

Every push to `main` that changes the video code runs **GitHub Actions → Render video**, which:

1. installs Remotion on GitHub's servers,
2. renders the `MyComp` composition,
3. commits the result to `renders/video.mp4` and attaches it to the run as the `video` artifact.

You can also start a render by hand: **Actions → Render video → Run workflow**.

## Working locally (optional)

```bash
npm install
npm run dev      # open Remotion Studio preview
npm run render   # render to out/video.mp4
```

The video code lives in `src/Composition.tsx`.
