# Type Alias: WebGpuFrameRenderFunction()

> **WebGpuFrameRenderFunction** = (`encode`) => `void`

Defined in: [src/webgpu/frameRenderContext.ts:61](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L61)

The `render` function handed to the source hook's `onFrame` worklet. Call it at most once per
frame with your encode function; skipping it drops the frame (nothing is published for it).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `encode` | (`context`) => `void` |

## Returns

`void`
