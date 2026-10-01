# Type Alias: WebGpuFrameRenderFunction()

> **WebGpuFrameRenderFunction** = (`encode`) => `void`

Defined in: [react-native/webgpu/frameRenderContext.ts:61](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/frameRenderContext.ts#L61)

The `render` function handed to the source hook's `onFrame` worklet. Call it at most once per
frame with your encode function; skipping it drops the frame (nothing is published for it).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `encode` | (`context`) => `void` |

## Returns

`void`
