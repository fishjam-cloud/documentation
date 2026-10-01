# Function: computeAspectFillCrop()

> **computeAspectFillCrop**(`sourceWidth`, `sourceHeight`, `targetAspect`, `uv00?`, `uv01?`, `uv10?`, `uv11?`): [`FrameCrop`](../interfaces/FrameCrop.md)

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:59

Center-crop of a (sourceWidth × sourceHeight) frame to the target aspect ratio (width/height).
A no-op full-frame crop when the source already has the target aspect. Worklet-safe.

Feed it the upright camera size from the render context:
`computeAspectFillCrop(context.cameraWidth, context.cameraHeight, context.outputWidth / context.outputHeight)`.

The optional `uv00..uv11` scalars form a UV-space transform applied around the frame center
(identity by default).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sourceWidth` | `number` |
| `sourceHeight` | `number` |
| `targetAspect` | `number` |
| `uv00?` | `number` |
| `uv01?` | `number` |
| `uv10?` | `number` |
| `uv11?` | `number` |

## Returns

[`FrameCrop`](../interfaces/FrameCrop.md)
