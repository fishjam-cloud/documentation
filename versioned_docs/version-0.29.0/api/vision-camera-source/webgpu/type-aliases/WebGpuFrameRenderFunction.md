# Type Alias: WebGpuFrameRenderFunction()

> **WebGpuFrameRenderFunction** = (`encode`) => `void`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/frameRenderContext.d.ts:60

The `render` function handed to the source hook's `onFrame` worklet. Call it at most once per
frame with your encode function; skipping it drops the frame (nothing is published for it).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `encode` | (`context`) => `void` |

## Returns

`void`
