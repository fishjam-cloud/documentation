# Function: packFrameCropParams()

> **packFrameCropParams**(`crop`): `ArrayBuffer`

Defined in: [src/webgpu/cropUtilities.ts:56](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L56)

Packs a [FrameCrop](../interfaces/FrameCrop.md) into the [FrameCropParams](../variables/FrameCropParams.md) uniform byte layout.
Worklet-safe; upload the result with `device.queue.writeBuffer(buffer, 0, bytes)`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `crop` | [`FrameCrop`](../interfaces/FrameCrop.md) |

## Returns

`ArrayBuffer`
