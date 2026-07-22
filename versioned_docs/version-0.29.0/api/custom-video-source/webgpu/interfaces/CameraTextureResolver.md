# Interface: CameraTextureResolver

Defined in: [src/webgpu/cameraTextureResolver.ts:16](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L16)

An owned `rgba8unorm` texture the camera frame is resolved into each frame — for pipelines that
want a plain `texture_2d` camera instead of `texture_external`. Build once at setup with
[createCameraTextureResolver](../functions/createCameraTextureResolver.md); every field is safe to capture into the frame worklet.

Prefer sampling the camera directly via [createCameraShaderBindings](../functions/createCameraShaderBindings.md) when you can: the
resolver costs one extra render pass per frame.

## Properties

### height

> `readonly` **height**: `number`

Defined in: [src/webgpu/cameraTextureResolver.ts:22](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L22)

***

### resolvePass

> `readonly` **resolvePass**: [`CameraPassthroughPipeline`](CameraPassthroughPipeline.md)

Defined in: [src/webgpu/cameraTextureResolver.ts:24](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L24)

**`Internal`**

The pass used to resolve into [texture](#texture).

***

### texture

> `readonly` **texture**: `GPUTexture`

Defined in: [src/webgpu/cameraTextureResolver.ts:18](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L18)

The resolved camera texture (`rgba8unorm`, sampled + render-attachment usage).

***

### view

> `readonly` **view**: `GPUTextureView`

Defined in: [src/webgpu/cameraTextureResolver.ts:20](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L20)

A reusable default view of [texture](#texture).

***

### width

> `readonly` **width**: `number`

Defined in: [src/webgpu/cameraTextureResolver.ts:21](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L21)
