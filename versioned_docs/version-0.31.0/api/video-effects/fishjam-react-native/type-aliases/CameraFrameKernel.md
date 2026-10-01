# Type Alias: CameraFrameKernel()

> **CameraFrameKernel** = (`frame`, `render`) => `void`

Defined in: [react-native/webgpu/cameraFrameProcessorSession.ts:59](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraFrameProcessorSession.ts#L59)

The per-frame drawing worklet. Called on the camera frame runtime for every admitted frame;
call `render(...)` at most once to draw this frame's output (skipping it drops the frame).
Inside `render` you receive a [WebGpuFrameRenderContext](../interfaces/WebGpuFrameRenderContext.md) with the live camera texture and
the output texture to draw into.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `frame` | [`CameraFrameInfo`](../interfaces/CameraFrameInfo.md) |
| `render` | [`WebGpuFrameRenderFunction`](WebGpuFrameRenderFunction.md) |

## Returns

`void`
