# Interface: CreateCameraFrameProcessorSessionOptions

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:64](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L64)

## Properties

### cameraShaderBindings?

> `optional` **cameraShaderBindings**: [`CameraShaderBindings`](CameraShaderBindings.md)

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:81](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L81)

Camera shader bindings built with `createCameraShaderBindings` — always with
`cameraPixelLayout: 'rgb'`: the Fishjam camera tap delivers RGB on every platform (on Android
it converts the camera texture before handing it over). When set, the render context
carries a ready-made `cameraBindGroup` for the live camera texture every frame.

***

### device

> **device**: `GPUDevice`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:68](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L68)

The shared, camera-import-capable GPUDevice (see `useCameraWebGpuDevice`).

***

### frameKernel

> **frameKernel**: [`CameraFrameKernel`](../type-aliases/CameraFrameKernel.md)

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:83](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L83)

The per-frame drawing worklet. See [CameraFrameKernel](../type-aliases/CameraFrameKernel.md).

***

### height

> **height**: `number`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:72](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L72)

Height of the published video, in pixels.

***

### poolSize?

> `optional` **poolSize**: `number`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:74](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L74)

Number of in-flight output surfaces. Defaults to `3`.

***

### track

> **track**: `MediaStreamTrack`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:66](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L66)

Fishjam's own raw camera track, from `useCamera`'s middleware.

***

### width

> **width**: `number`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:70](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L70)

Width of the published video, in pixels.
