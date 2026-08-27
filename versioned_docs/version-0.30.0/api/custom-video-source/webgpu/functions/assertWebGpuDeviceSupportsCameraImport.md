# Function: assertWebGpuDeviceSupportsCameraImport()

> **assertWebGpuDeviceSupportsCameraImport**(`device`): `void`

Defined in: [src/webgpu/requiredFeatures.ts:31](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/requiredFeatures.ts#L31)

Throws a descriptive error when `device` is missing any feature required to import camera
frames or Fishjam output surfaces on this platform. Called automatically on devices passed as
an override; call it yourself to validate a device early.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |

## Returns

`void`
