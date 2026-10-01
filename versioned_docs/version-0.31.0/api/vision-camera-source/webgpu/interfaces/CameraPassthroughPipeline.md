# Interface: CameraPassthroughPipeline

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:16

A ready-made full-screen camera→target render pipeline. Build once at setup with
[createCameraPassthroughPipeline](../functions/createCameraPassthroughPipeline.md); every field is safe to capture into the frame worklet.

## Properties

### cameraShaderBindings

> `readonly` **cameraShaderBindings**: [`CameraShaderBindings`](CameraShaderBindings.md)

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:19

The camera shader bindings the pipeline samples through.

***

### cropBindGroup

> `readonly` **cropBindGroup**: `GPUBindGroup`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:23

Static bind group with the crop uniform.

***

### cropParamsBuffer

> `readonly` **cropParamsBuffer**: `GPUBuffer`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:21

Uniform buffer holding the packed FrameCropParams; written by [encodeCameraPassthrough](../functions/encodeCameraPassthrough.md).

***

### pipeline

> `readonly` **pipeline**: `GPURenderPipeline`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:17
