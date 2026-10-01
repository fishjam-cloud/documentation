# Function: createCameraPassthroughPipeline()

> **createCameraPassthroughPipeline**(`device`, `options`): [`CameraPassthroughPipeline`](../interfaces/CameraPassthroughPipeline.md)

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:133](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L133)

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
