# Interface: UseVisionCameraWebGpuSourceOptions

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:37](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L37)

Options for [useVisionCameraWebGpuSource](../functions/useVisionCameraWebGpuSource.md). Also accepts every VisionCamera frame-output
option except `pixelFormat`, which the hook forces to `'native'` (the zero-copy camera-import
path requires it).

## Extends

- `Partial`\<`Omit`\<`FrameOutputOptions`, `"pixelFormat"`\>\>

## Properties

### cameraShaderBindings?

> `optional` **cameraShaderBindings**: [`CameraShaderBindings`](CameraShaderBindings.md)

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:62](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L62)

Camera shader bindings built with `createCameraShaderBindings`. When set, the render context
carries a ready-made `cameraBindGroup` for the live camera texture every frame.

***

### device?

> `optional` **device**: `GPUDevice`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:57](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L57)

Bring your own GPUDevice instead of the shared one from `useCameraWebGpuDevice`. It is
validated against the required camera-import features; a device missing any of them surfaces
a descriptive `error` instead of failing per frame.

***

### enabled?

> `optional` **enabled**: `boolean`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:42](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L42)

Whether the source is live. While `false`, no track or surface pool exists and nothing is
published — the declarative sibling of VisionCamera's `isActive`. Defaults to `true`.

***

### frameIntervalNanoseconds?

> `optional` **frameIntervalNanoseconds**: `number`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:77](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L77)

Fallback spacing between published frames, in nanoseconds, used only when a camera frame
carries no usable timestamp. Defaults to 33,333,333 (30 fps).

***

### height

> **height**: `number`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:46](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L46)

Height of the published video, in pixels.

***

### onFrame()

> **onFrame**: (`frame`, `render`) => `void`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:70](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L70)

Worklet called for every camera frame. Call `render(...)` at most once to draw this frame's
output; skipping it drops the frame (nothing is published for it). After `render(...)`
returns you may keep using `frame` (for example run inference) — but only until this
callback returns, when the hook releases the frame. Do not retain it. Keep the function's
identity stable (`useCallback` or module scope).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `frame` | `Frame` |
| `render` | [`WebGpuFrameRenderFunction`](../type-aliases/WebGpuFrameRenderFunction.md) |

#### Returns

`void`

***

### onFrameDropped()?

> `optional` **onFrameDropped**: (`reason`) => `void`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:72](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L72)

Called whenever the camera pipeline drops a frame; forwarded to VisionCamera.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason` | `FrameDroppedReason` |

#### Returns

`void`

***

### poolSize?

> `optional` **poolSize**: `number`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:51](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L51)

Number of in-flight output surfaces (a pushed frame may still be encoding while the next one
is drawn). Defaults to `3`.

***

### width

> **width**: `number`

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:44](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L44)

Width of the published video, in pixels.
