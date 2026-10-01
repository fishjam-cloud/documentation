# Function: createCameraTextureResolver()

> **createCameraTextureResolver**(`device`, `size`): [`CameraTextureResolver`](../interfaces/CameraTextureResolver.md)

Defined in: [src/webgpu/cameraTextureResolver.ts:32](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L32)

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
