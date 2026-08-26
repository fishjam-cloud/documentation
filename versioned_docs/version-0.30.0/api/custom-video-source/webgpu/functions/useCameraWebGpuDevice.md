# Function: useCameraWebGpuDevice()

> **useCameraWebGpuDevice**(): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:69](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L69)

The app-wide GPUDevice used for camera work, configured with
[getRequiredWebGpuCameraFeatures](getRequiredWebGpuCameraFeatures.md). All callers share one device, so pipelines you build
against it work with the textures the source hook hands your render callback.

Build your pipelines once the device arrives:
```tsx
const { device } = useCameraWebGpuDevice();
const effect = useMemo(() => (device ? buildMyEffect(device) : null), [device]);
```

## Returns

[`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)
