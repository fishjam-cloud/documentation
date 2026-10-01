# Interface: WebGpuFrameRenderContext

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:8

Everything your render callback needs for one frame. Handed to the function you pass to
`render(...)` inside the source hook's `onFrame` worklet; every field is valid only until that
function returns.

## Properties

### cameraBindGroup?

> `optional` **cameraBindGroup**: `GPUBindGroup`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:31

Ready-made bind group for [cameraTexture](#cameratexture), present when the hook's
`cameraShaderBindings` option was provided: set it at the bindings' group index and
`sampleCamera(uv)` works.

***

### cameraHeight

> **cameraHeight**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:50

***

### cameraIsMirrored

> **cameraIsMirrored**: `boolean`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:52

Whether the camera feed is mirrored (front cameras usually are).

***

### cameraTexture

> **cameraTexture**: `GPUExternalTexture`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:25

The live camera frame as a `texture_external`, already rotated upright (and mirrored per the
camera's mirroring). On Android it samples as raw YCbCr — sample it through
`createCameraShaderBindings` (or the ready-made [cameraBindGroup](#camerabindgroup)) for
platform-correct RGB.

***

### cameraWidth

> **cameraWidth**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:49

Upright (post-rotation) camera frame size, in pixels — feed it to `computeAspectFillCrop`
together with the output aspect.

***

### commandEncoder

> **commandEncoder**: `GPUCommandEncoder`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:18

The command encoder for this frame. Encode your render/compute passes into it — the hook
submits it (a single submit) and delivers the frame after your callback returns. Do not call
`queue.submit` yourself for work targeting [outputTexture](#outputtexture).

***

### device

> **device**: `GPUDevice`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:10

The device in use (the shared device, or your override).

***

### outputHeight

> **outputHeight**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:44

***

### outputTexture

> **outputTexture**: `GPUTexture`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:33

The output texture your passes draw into; its content becomes the published video frame.

***

### outputView

> **outputView**: `GPUTextureView`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:41

A cached, reusable default `createView()` of [outputTexture](#outputtexture). Prefer this over calling
`outputTexture.createView()` yourself every frame: `GPUTextureView` has no `destroy()`/`release()`
in react-native-webgpu, so a per-frame view accumulates native (malloc) wrappers on the frame
runtime until GC — a steady leak in a render loop. The output textures are a small fixed pool, so
the hook builds one view per slot and reuses it.

***

### outputWidth

> **outputWidth**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:43

Size of [outputTexture](#outputtexture), in pixels.

***

### queue

> **queue**: `GPUQueue`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:12

Shortcut for `device.queue`.
