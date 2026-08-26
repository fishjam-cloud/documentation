# Function: createCameraTextureResolver()

> **createCameraTextureResolver**(`device`, `size`): [`CameraTextureResolver`](../interfaces/CameraTextureResolver.md)

Defined in: [src/webgpu/cameraTextureResolver.ts:32](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L32)

Creates a [CameraTextureResolver](../interfaces/CameraTextureResolver.md) with an owned `rgba8unorm` texture of the given size.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |
| `size` | \{ `height`: `number`; `width`: `number`; \} |
| `size.height` | `number` |
| `size.width` | `number` |

## Returns

[`CameraTextureResolver`](../interfaces/CameraTextureResolver.md)
