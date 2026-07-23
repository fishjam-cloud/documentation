# Function: packFrameCropParams()

> **packFrameCropParams**(`crop`): `ArrayBuffer`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:46

Packs a [FrameCrop](../interfaces/FrameCrop.md) into the [FrameCropParams](../variables/FrameCropParams.md) uniform byte layout.
Worklet-safe; upload the result with `device.queue.writeBuffer(buffer, 0, bytes)`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `crop` | [`FrameCrop`](../interfaces/FrameCrop.md) |

## Returns

`ArrayBuffer`
