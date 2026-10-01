# Function: encodeCameraPassthrough()

> **encodeCameraPassthrough**(`device`, `passthrough`, `cameraTexture`, `outputView`, `commandEncoder`, `crop`): `void`

Defined in: [react-native/webgpu/cameraPassthroughPipeline.ts:201](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraPassthroughPipeline.ts#L201)

Encodes one full-screen pass drawing the camera into `outputView`, cropped per `crop`.
Worklet-safe; call it inside your render callback, and encode any overlay passes after it on
the same command encoder (with `loadOp: 'load'` so they draw on top).

At most one call per pipeline instance per frame: the crop lives in a single uniform buffer
written via `queue.writeBuffer`, which lands before the submitted command buffer executes — a
second call in the same frame makes both draws use the second crop. Encode to multiple targets
with different crops by building one pipeline per target.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |
| `passthrough` | [`CameraPassthroughPipeline`](../interfaces/CameraPassthroughPipeline.md) |
| `cameraTexture` | `GPUExternalTexture` |
| `outputView` | `GPUTextureView` |
| `commandEncoder` | `GPUCommandEncoder` |
| `crop` | [`FrameCrop`](../interfaces/FrameCrop.md) |

## Returns

`void`
