# Function: createCameraPassthroughPipeline()

> **createCameraPassthroughPipeline**(`device`, `options?`): [`CameraPassthroughPipeline`](../interfaces/CameraPassthroughPipeline.md)

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraPassthroughPipeline.d.ts:32

Builds the full-screen camera passthrough pipeline: crop/orientation via [FrameCrop](../interfaces/FrameCrop.md),
platform-correct camera sampling, one triangle. Use it to publish the camera through the WebGPU
tier with zero WGSL of your own, or as the base pass under your overlay passes.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |
| `options?` | [`CameraPassthroughPipelineOptions`](../interfaces/CameraPassthroughPipelineOptions.md) |

## Returns

[`CameraPassthroughPipeline`](../interfaces/CameraPassthroughPipeline.md)
