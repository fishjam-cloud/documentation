# Interface: CameraPassthroughPipeline

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:78](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L78)

A ready-made full-screen camera→target render pipeline. Build once at setup with
[createCameraPassthroughPipeline](../functions/createCameraPassthroughPipeline.md); every field is safe to capture into the frame worklet.

## Properties

### cameraShaderBindings

> `readonly` **cameraShaderBindings**: [`CameraShaderBindings`](CameraShaderBindings.md)

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:81](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L81)

The camera shader bindings the pipeline samples through.

***

### cropBindGroup

> `readonly` **cropBindGroup**: `GPUBindGroup`

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:85](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L85)

Static bind group with the crop uniform.

***

### cropParamsBuffer

> `readonly` **cropParamsBuffer**: `GPUBuffer`

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:83](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L83)

Uniform buffer holding the packed FrameCropParams; written by [encodeCameraPassthrough](../functions/encodeCameraPassthrough.md).

***

### pipeline

> `readonly` **pipeline**: `GPURenderPipeline`

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:79](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L79)
