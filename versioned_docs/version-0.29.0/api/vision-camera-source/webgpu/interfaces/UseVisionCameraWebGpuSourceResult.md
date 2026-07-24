# Interface: UseVisionCameraWebGpuSourceResult

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:81](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L81)

Result of [useVisionCameraWebGpuSource](../functions/useVisionCameraWebGpuSource.md).

## Properties

### device

> **device**: `null` \| `GPUDevice`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:93](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L93)

The GPUDevice in use — build your pipelines against it. `null` until acquired.

***

### error

> **error**: `null` \| `Error`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:95](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L95)

WebGPU runtime, device acquisition, track creation, or publishing failure, if any.

***

### frameOutput

> **frameOutput**: `CameraFrameOutput`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:86](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L86)

The VisionCamera frame output driving this source. Plug it into your camera session:
`useCamera({ device, isActive, outputs: [frameOutput] })`.

***

### stream

> **stream**: `null` \| `MediaStream`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:91](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L91)

The published stream — render it with `RTCView` for a self-view. `null` until the underlying
track is ready (creation is asynchronous).
