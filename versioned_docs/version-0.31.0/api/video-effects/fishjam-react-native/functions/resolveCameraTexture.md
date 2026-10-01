# Function: resolveCameraTexture()

> **resolveCameraTexture**(`device`, `resolver`, `cameraTexture`, `cameraWidth`, `cameraHeight`, `commandEncoder`): `void`

Defined in: [react-native/webgpu/cameraTextureResolver.ts:73](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraTextureResolver.ts#L73)

Encodes one pass resolving the live camera texture into `resolver.texture`, aspect-filled to
the resolver's size (the YUV decode for its pixel layout included). Worklet-safe; call it inside your render
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
