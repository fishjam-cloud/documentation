# Function: computeSquareCrop()

> **computeSquareCrop**(`sourceWidth`, `sourceHeight`, `uv00?`, `uv01?`, `uv10?`, `uv11?`): [`FrameCrop`](../interfaces/FrameCrop.md)

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:66

Square center-crop of a (sourceWidth × sourceHeight) frame — the usual shape for square model
inputs. Worklet-safe. The optional `uv00..uv11` scalars are as in [computeAspectFillCrop](computeAspectFillCrop.md).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sourceWidth` | `number` |
| `sourceHeight` | `number` |
| `uv00?` | `number` |
| `uv01?` | `number` |
| `uv10?` | `number` |
| `uv11?` | `number` |

## Returns

[`FrameCrop`](../interfaces/FrameCrop.md)
