# Function: createCameraPassthroughPipeline()

> **createCameraPassthroughPipeline**(`device`, `options`): [`CameraPassthroughPipeline`](../interfaces/CameraPassthroughPipeline.md)

Defined in: [src/webgpu/cameraPassthroughPipeline.ts:108](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraPassthroughPipeline.ts#L108)

Builds the full-screen camera passthrough pipeline: crop/orientation via [FrameCrop](../interfaces/FrameCrop.md),
platform-correct camera sampling, one triangle. Use it to publish the camera through the WebGPU
tier with zero WGSL of your own, or as the base pass under your overlay passes.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |
| `options` | [`CameraPassthroughPipelineOptions`](../interfaces/CameraPassthroughPipelineOptions.md) |

## Returns

[`CameraPassthroughPipeline`](../interfaces/CameraPassthroughPipeline.md)
