# Interface: CameraTextureResolver

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraTextureResolver.d.ts:12

An owned `rgba8unorm` texture the camera frame is resolved into each frame — for pipelines that
want a plain `texture_2d` camera instead of `texture_external`. Build once at setup with
[createCameraTextureResolver](../functions/createCameraTextureResolver.md); every field is safe to capture into the frame worklet.

Prefer sampling the camera directly via [createCameraShaderBindings](../functions/createCameraShaderBindings.md) when you can: the
resolver costs one extra render pass per frame.

## Properties

### height

> `readonly` **height**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraTextureResolver.d.ts:18

***

### resolvePass

> `readonly` **resolvePass**: [`CameraPassthroughPipeline`](CameraPassthroughPipeline.md)

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraTextureResolver.d.ts:20

**`Internal`**

The pass used to resolve into [texture](#texture).

***

### texture

> `readonly` **texture**: `GPUTexture`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraTextureResolver.d.ts:14

The resolved camera texture (`rgba8unorm`, sampled + render-attachment usage).

***

### view

> `readonly` **view**: `GPUTextureView`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraTextureResolver.d.ts:16

A reusable default view of [texture](#texture).

***

### width

> `readonly` **width**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraTextureResolver.d.ts:17
