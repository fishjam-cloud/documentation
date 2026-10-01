# Function: createCameraTextureResolver()

> **createCameraTextureResolver**(`device`, `size`): [`CameraTextureResolver`](../interfaces/CameraTextureResolver.md)

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraTextureResolver.d.ts:27

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
