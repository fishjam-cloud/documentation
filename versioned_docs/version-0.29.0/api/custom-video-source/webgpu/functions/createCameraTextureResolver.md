# Function: createCameraTextureResolver()

> **createCameraTextureResolver**(`device`, `size`): [`CameraTextureResolver`](../interfaces/CameraTextureResolver.md)

Defined in: [src/webgpu/cameraTextureResolver.ts:32](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L32)

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
