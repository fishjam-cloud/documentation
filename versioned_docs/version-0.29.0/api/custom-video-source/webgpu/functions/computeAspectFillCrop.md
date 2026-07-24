# Function: computeAspectFillCrop()

> **computeAspectFillCrop**(`sourceWidth`, `sourceHeight`, `targetAspect`, `uv00`, `uv01`, `uv10`, `uv11`): [`FrameCrop`](../interfaces/FrameCrop.md)

Defined in: [src/webgpu/cropUtilities.ts:86](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L86)

Center-crop of a (sourceWidth × sourceHeight) frame to the target aspect ratio (width/height).
A no-op full-frame crop when the source already has the target aspect. Worklet-safe.

Feed it the upright camera size from the render context:
`computeAspectFillCrop(context.cameraWidth, context.cameraHeight, context.outputWidth / context.outputHeight)`.

The optional `uv00..uv11` scalars form a UV-space transform applied around the frame center
(identity by default).

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `sourceWidth` | `number` | `undefined` |
| `sourceHeight` | `number` | `undefined` |
| `targetAspect` | `number` | `undefined` |
| `uv00` | `number` | `1` |
| `uv01` | `number` | `0` |
| `uv10` | `number` | `0` |
| `uv11` | `number` | `1` |

## Returns

[`FrameCrop`](../interfaces/FrameCrop.md)
