# Interface: CameraTextureResolver

Defined in: [react-native/webgpu/cameraTextureResolver.ts:19](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraTextureResolver.ts#L19)

An owned `rgba8unorm` texture the camera frame is resolved into each frame — for pipelines that
want a plain `texture_2d` camera instead of `texture_external`. Build once at setup with
[createCameraTextureResolver](../functions/createCameraTextureResolver.md); every field is safe to capture into the frame worklet.

Prefer sampling the camera directly via [createCameraShaderBindings](../functions/createCameraShaderBindings.md) when you can: the
resolver costs one extra render pass per frame.

## Properties

### height

> `readonly` **height**: `number`

Defined in: [react-native/webgpu/cameraTextureResolver.ts:25](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraTextureResolver.ts#L25)

***

### resolvePass

> `readonly` **resolvePass**: [`CameraPassthroughPipeline`](CameraPassthroughPipeline.md)

Defined in: [react-native/webgpu/cameraTextureResolver.ts:27](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraTextureResolver.ts#L27)

**`Internal`**

The pass used to resolve into [texture](#texture).

***

### texture

> `readonly` **texture**: `GPUTexture`

Defined in: [react-native/webgpu/cameraTextureResolver.ts:21](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraTextureResolver.ts#L21)

The resolved camera texture (`rgba8unorm`, sampled + render-attachment usage).

***

### view

> `readonly` **view**: `GPUTextureView`

Defined in: [react-native/webgpu/cameraTextureResolver.ts:23](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraTextureResolver.ts#L23)

A reusable default view of [texture](#texture).

***

### width

> `readonly` **width**: `number`

Defined in: [react-native/webgpu/cameraTextureResolver.ts:24](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraTextureResolver.ts#L24)
