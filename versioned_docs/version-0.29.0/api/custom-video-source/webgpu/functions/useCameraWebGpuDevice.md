# Function: useCameraWebGpuDevice()

> **useCameraWebGpuDevice**(): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:69](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L69)

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
