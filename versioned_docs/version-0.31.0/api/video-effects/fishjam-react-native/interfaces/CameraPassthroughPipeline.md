# Interface: CameraPassthroughPipeline

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:95](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L95)

A ready-made full-screen camera→target render pipeline. Build once at setup with
[createCameraPassthroughPipeline](../functions/createCameraPassthroughPipeline.md); every field is safe to capture into the frame worklet.

## Properties

### cameraShaderBindings

> `readonly` **cameraShaderBindings**: [`CameraShaderBindings`](CameraShaderBindings.md)

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:98](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L98)

The camera shader bindings the pipeline samples through.

***

### cropBindGroup

> `readonly` **cropBindGroup**: `GPUBindGroup`

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:102](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L102)

Static bind group with the crop uniform.

***

### cropParamsBuffer

> `readonly` **cropParamsBuffer**: `GPUBuffer`

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:100](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L100)

Uniform buffer holding the packed FrameCropParams; written by [encodeCameraPassthrough](../functions/encodeCameraPassthrough.md).

***

### pipeline

> `readonly` **pipeline**: `GPURenderPipeline`

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:96](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L96)
