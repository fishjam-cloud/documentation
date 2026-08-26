# Function: assertWebGpuDeviceSupportsCameraImport()

> **assertWebGpuDeviceSupportsCameraImport**(`device`): `void`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/requiredFeatures.d.ts:16

Throws a descriptive error when `device` is missing any feature required to import camera
frames or Fishjam output surfaces on this platform. Called automatically on devices passed as
an override; call it yourself to validate a device early.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |

## Returns

`void`
