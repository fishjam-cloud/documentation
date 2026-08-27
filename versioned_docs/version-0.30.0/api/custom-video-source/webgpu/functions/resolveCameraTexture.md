# Function: resolveCameraTexture()

> **resolveCameraTexture**(`device`, `resolver`, `cameraTexture`, `cameraWidth`, `cameraHeight`, `commandEncoder`): `void`

Defined in: [src/webgpu/cameraTextureResolver.ts:58](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L58)

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
