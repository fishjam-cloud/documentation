# Function: createCameraBindGroup()

> **createCameraBindGroup**(`device`, `cameraShaderBindings`, `cameraTexture`): `GPUBindGroup`

Defined in: [react-native/webgpu/cameraShaderBindings.ts:173](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L173)

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
