# Function: useCameraWebGpuDevice()

> **useCameraWebGpuDevice**(): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: react-native-custom-video-source/dist/typescript/webgpu/useCameraWebGpuDevice.d.ts:21

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
