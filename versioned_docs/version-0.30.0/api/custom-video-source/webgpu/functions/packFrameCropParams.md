# Function: packFrameCropParams()

> **packFrameCropParams**(`crop`): `ArrayBuffer`

Defined in: [src/webgpu/cropUtilities.ts:56](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L56)

Packs a [FrameCrop](../interfaces/FrameCrop.md) into the [FrameCropParams](../variables/FrameCropParams.md) uniform byte layout.
Worklet-safe; upload the result with `device.queue.writeBuffer(buffer, 0, bytes)`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `crop` | [`FrameCrop`](../interfaces/FrameCrop.md) |

## Returns

`ArrayBuffer`
