# Interface: WebGpuFrameRenderContext

Defined in: [src/webgpu/frameRenderContext.ts:8](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L8)

Everything your render callback needs for one frame. Handed to the function you pass to
`render(...)` inside the source hook's `onFrame` worklet; every field is valid only until that
function returns.

## Properties

### cameraBindGroup?

> `optional` **cameraBindGroup**: `GPUBindGroup`

Defined in: [src/webgpu/frameRenderContext.ts:31](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L31)

Ready-made bind group for [cameraTexture](#cameratexture), present when the hook's
`cameraShaderBindings` option was provided: set it at the bindings' group index and
`sampleCamera(uv)` works.

***

### cameraHeight

> **cameraHeight**: `number`

Defined in: [src/webgpu/frameRenderContext.ts:50](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L50)

***

### cameraIsMirrored

> **cameraIsMirrored**: `boolean`

Defined in: [src/webgpu/frameRenderContext.ts:52](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L52)

Whether the camera feed is mirrored (front cameras usually are).

***

### cameraTexture

> **cameraTexture**: `GPUExternalTexture`

Defined in: [src/webgpu/frameRenderContext.ts:25](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L25)

The live camera frame as a `texture_external`, already rotated upright (and mirrored per the
camera's mirroring). On Android it samples as raw YCbCr — sample it through
`createCameraShaderBindings` (or the ready-made [cameraBindGroup](#camerabindgroup)) for
platform-correct RGB.

***

### cameraWidth

> **cameraWidth**: `number`

Defined in: [src/webgpu/frameRenderContext.ts:49](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L49)

Upright (post-rotation) camera frame size, in pixels — feed it to `computeAspectFillCrop`
together with the output aspect.

***

### commandEncoder

> **commandEncoder**: `GPUCommandEncoder`

Defined in: [src/webgpu/frameRenderContext.ts:18](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L18)

The command encoder for this frame. Encode your render/compute passes into it — the hook
submits it (a single submit) and delivers the frame after your callback returns. Do not call
`queue.submit` yourself for work targeting [outputTexture](#outputtexture).

***

### device

> **device**: `GPUDevice`

Defined in: [src/webgpu/frameRenderContext.ts:10](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L10)

The device in use (the shared device, or your override).

***

### outputHeight

> **outputHeight**: `number`

Defined in: [src/webgpu/frameRenderContext.ts:44](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L44)

***

### outputTexture

> **outputTexture**: `GPUTexture`

Defined in: [src/webgpu/frameRenderContext.ts:33](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L33)

The output texture your passes draw into; its content becomes the published video frame.

***

### outputView

> **outputView**: `GPUTextureView`

Defined in: [src/webgpu/frameRenderContext.ts:41](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L41)

A cached, reusable default `createView()` of [outputTexture](#outputtexture). Prefer this over calling
`outputTexture.createView()` yourself every frame: `GPUTextureView` has no `destroy()`/`release()`
in react-native-webgpu, so a per-frame view accumulates native (malloc) wrappers on the frame
runtime until GC — a steady leak in a render loop. The output textures are a small fixed pool, so
the hook builds one view per slot and reuses it.

***

### outputWidth

> **outputWidth**: `number`

Defined in: [src/webgpu/frameRenderContext.ts:43](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L43)

Size of [outputTexture](#outputtexture), in pixels.

***

### queue

> **queue**: `GPUQueue`

Defined in: [src/webgpu/frameRenderContext.ts:12](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L12)

Shortcut for `device.queue`.
