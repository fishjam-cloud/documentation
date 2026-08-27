# index

Publish your own video frames to Fishjam.

Source-lifecycle hooks that create a custom video track, publish it, and clean it up — you
supply the frames from any source. Two modes, picked by how you produce frames:

- [useManagedForwardTrack](functions/useManagedForwardTrack.md) — you already have finished native buffers (a camera, a native
  ML pipeline, a compositor); forward each buffer pointer with `forwardFrame` from
  `@fishjam-cloud/react-native-webrtc`.
- [useManagedPooledTrack](functions/useManagedPooledTrack.md) — you render the frames yourself; allocate a surface pool, draw
  into it, and hand each frame back with `pushFrame`. The `@fishjam-cloud/react-native-custom-video-source/webgpu`
  entry point provides a WebGPU camera-rendering toolkit for this mode.

For a ready-made VisionCamera integration on top of this, use
`@fishjam-cloud/react-native-vision-camera-source`.

## Interfaces

- [ManagedForwardTrack](interfaces/ManagedForwardTrack.md)
- [ManagedPooledTrack](interfaces/ManagedPooledTrack.md)
- [WorkletBufferDescriptor](interfaces/WorkletBufferDescriptor.md)

## Functions

- [useManagedForwardTrack](functions/useManagedForwardTrack.md)
- [useManagedPooledTrack](functions/useManagedPooledTrack.md)
