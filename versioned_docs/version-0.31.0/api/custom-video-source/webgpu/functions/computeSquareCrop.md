# Function: computeSquareCrop()

> **computeSquareCrop**(`sourceWidth`, `sourceHeight`, `uv00`, `uv01`, `uv10`, `uv11`): [`FrameCrop`](../interfaces/FrameCrop.md)

Defined in: [src/webgpu/cropUtilities.ts:123](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L123)

Square center-crop of a (sourceWidth × sourceHeight) frame — the usual shape for square model
inputs. Worklet-safe. The optional `uv00..uv11` scalars are as in [computeAspectFillCrop](computeAspectFillCrop.md).

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `sourceWidth` | `number` | `undefined` |
| `sourceHeight` | `number` | `undefined` |
| `uv00` | `number` | `1` |
| `uv01` | `number` | `0` |
| `uv10` | `number` | `0` |
| `uv11` | `number` | `1` |

## Returns

[`FrameCrop`](../interfaces/FrameCrop.md)
