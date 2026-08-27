# Function: resolveCameraTexture()

> **resolveCameraTexture**(`device`, `resolver`, `cameraTexture`, `cameraWidth`, `cameraHeight`, `commandEncoder`): `void`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraTextureResolver.d.ts:38

Encodes one pass resolving the live camera texture into `resolver.texture`, aspect-filled to
the resolver's size (platform YUV decode included). Worklet-safe; call it inside your render
callback before the passes that sample `resolver.texture`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |
| `resolver` | [`CameraTextureResolver`](../interfaces/CameraTextureResolver.md) |
| `cameraTexture` | `GPUExternalTexture` |
| `cameraWidth` | `number` |
| `cameraHeight` | `number` |
| `commandEncoder` | `GPUCommandEncoder` |

## Returns

`void`
