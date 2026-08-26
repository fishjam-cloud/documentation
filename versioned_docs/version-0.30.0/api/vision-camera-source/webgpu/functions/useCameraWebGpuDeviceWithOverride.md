# Function: useCameraWebGpuDeviceWithOverride()

> **useCameraWebGpuDeviceWithOverride**(`override`): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: react-native-custom-video-source/dist/typescript/webgpu/useCameraWebGpuDevice.d.ts:26

Device resolution for the source hook: the user-provided override (validated) when present,
otherwise the shared device. Always called, so hook order stays stable either way.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `override` | `undefined` \| `GPUDevice` |

## Returns

[`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)
