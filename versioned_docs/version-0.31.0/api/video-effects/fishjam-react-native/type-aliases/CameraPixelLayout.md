# Type Alias: CameraPixelLayout

> **CameraPixelLayout** = `"rgb"` \| `"ycbcr-raw"`

Defined in: [react-native/webgpu/cameraShaderBindings.ts:44](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L44)

How the camera texture's samples are laid out, which decides the decode `sampleCamera` applies:

- `'rgb'` — samples are ready-to-use RGB. iOS cameras, and the Fishjam camera tap on every
  platform (see `createCameraFrameProcessorSession`).
- `'ycbcr-raw'` — samples are raw [Y, Cb, Cr] that need the BT.709 limited-range decode. Cameras
  imported from an opaque YCbCr AHardwareBuffer, such as VisionCamera on Android.
