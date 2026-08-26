# Type Alias: WebGpuFrameRenderFunction()

> **WebGpuFrameRenderFunction** = (`encode`) => `void`

Defined in: [src/webgpu/frameRenderContext.ts:61](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/frameRenderContext.ts#L61)

The `render` function handed to the source hook's `onFrame` worklet. Call it at most once per
frame with your encode function; skipping it drops the frame (nothing is published for it).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `encode` | (`context`) => `void` |

## Returns

`void`
