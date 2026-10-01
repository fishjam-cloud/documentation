# Function: useCameraWebGpuDevice()

> **useCameraWebGpuDevice**(): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: [react-native/webgpu/useCameraWebGpuDevice.ts:76](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/useCameraWebGpuDevice.ts#L76)

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
