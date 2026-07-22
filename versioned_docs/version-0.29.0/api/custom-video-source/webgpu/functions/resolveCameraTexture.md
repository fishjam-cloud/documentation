# Function: resolveCameraTexture()

> **resolveCameraTexture**(`device`, `resolver`, `cameraTexture`, `cameraWidth`, `cameraHeight`, `commandEncoder`): `void`

Defined in: [src/webgpu/cameraTextureResolver.ts:58](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraTextureResolver.ts#L58)

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
