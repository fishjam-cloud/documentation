# Function: createCameraBindGroup()

> **createCameraBindGroup**(`device`, `cameraShaderBindings`, `cameraTexture`): `GPUBindGroup`

Defined in: [src/webgpu/cameraShaderBindings.ts:134](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L134)

Builds the per-frame bind group for the live camera texture. The source hook already does this
for you when you pass `cameraShaderBindings` in its options (see the render context's
`cameraBindGroup`); call it yourself only for advanced multi-layout setups. Worklet-safe.

A camera texture expires when the frame ends, so a bind group referencing it must be rebuilt
every frame — never cache the result.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |
| `cameraShaderBindings` | [`CameraShaderBindings`](../interfaces/CameraShaderBindings.md) |
| `cameraTexture` | `GPUExternalTexture` |

## Returns

`GPUBindGroup`
