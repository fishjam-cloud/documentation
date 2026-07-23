# Function: useVisionCameraWebGpuSource()

> **useVisionCameraWebGpuSource**\<`SourceId`\>(`sourceId`, `options`): [`UseVisionCameraWebGpuSourceResult`](../interfaces/UseVisionCameraWebGpuSourceResult.md)

Defined in: [react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts:126](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/webgpu/useVisionCameraWebGpuSource.ts#L126)

Publishes WebGPU-rendered video to Fishjam, fed by your VisionCamera feed.

A sibling of `useCustomSource`: the hook creates the video track (and its pool of output
surfaces), publishes it under `sourceId`, and cleans everything up on unmount. Every camera
frame reaches your `onFrame` worklet, where calling `render(...)` hands you the live camera as
a GPU texture plus an output texture to draw into — what you draw is what peers receive.
Everything else is handled for you: output-surface management, GPU synchronization with the
video encoder, timestamps, rotation, and frame lifetimes. Must be used under `FishjamProvider`.

```tsx
const { frameOutput, stream, device } = useVisionCameraWebGpuSource('my-camera', {
  width: 720,
  height: 1280,
  cameraShaderBindings: effect?.cameraBindings,
  onFrame,
});
useVisionCamera({ device: cameraDevice, isActive: true, outputs: [frameOutput] });
```

To publish the camera unmodified (no rendering), use `useVisionCameraSource` from the package
root instead. For a ready-made camera→output pass to build on, see
`createCameraPassthroughPipeline`.

## Type Parameters

| Type Parameter |
| ------ |
| `SourceId` *extends* `string` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceId` | `SourceId` | Identifies this source among the peer's tracks, like in `useCustomSource`. |
| `options` | [`UseVisionCameraWebGpuSourceOptions`](../interfaces/UseVisionCameraWebGpuSourceOptions.md) | See [UseVisionCameraWebGpuSourceOptions](../interfaces/UseVisionCameraWebGpuSourceOptions.md). |

## Returns

[`UseVisionCameraWebGpuSourceResult`](../interfaces/UseVisionCameraWebGpuSourceResult.md)
