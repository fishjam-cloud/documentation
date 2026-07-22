# Function: useVisionCameraSource()

> **useVisionCameraSource**\<`SourceId`\>(`sourceId`, `options`): [`UseVisionCameraSourceResult`](../interfaces/UseVisionCameraSourceResult.md)

Defined in: [react-native-vision-camera-source/src/useVisionCameraSource.ts:89](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/useVisionCameraSource.ts#L89)

Publishes your VisionCamera feed to Fishjam.

A sibling of `useCustomSource`: the hook creates the video track, publishes it under
`sourceId`, and cleans everything up on unmount. Each camera frame is handed to Fishjam
without copying its pixels. Must be used under `FishjamProvider`.

```tsx
const { frameOutput, stream } = useVisionCameraSource('my-camera');

useVisionCamera({ device: cameraDevice, isActive: true, outputs: [frameOutput] });

return stream ? <RTCView mediaStream={stream} objectFit="cover" /> : null;
```

To also run inference on the same frames, pass an [onFrame](../interfaces/UseVisionCameraSourceOptions.md#onframe)
worklet. To render your own content into the published video with WebGPU, use
`useVisionCameraWebGpuSource` from `@fishjam-cloud/react-native-vision-camera-source/webgpu`
instead.

## Type Parameters

| Type Parameter |
| ------ |
| `SourceId` *extends* `string` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceId` | `SourceId` | Identifies this source among the peer's tracks, like in `useCustomSource`. |
| `options` | [`UseVisionCameraSourceOptions`](../interfaces/UseVisionCameraSourceOptions.md) | See [UseVisionCameraSourceOptions](../interfaces/UseVisionCameraSourceOptions.md). |

## Returns

[`UseVisionCameraSourceResult`](../interfaces/UseVisionCameraSourceResult.md)
