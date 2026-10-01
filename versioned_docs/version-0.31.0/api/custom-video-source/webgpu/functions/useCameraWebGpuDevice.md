# Function: useCameraWebGpuDevice()

> **useCameraWebGpuDevice**(): [`UseCameraWebGpuDeviceResult`](../interfaces/UseCameraWebGpuDeviceResult.md)

Defined in: [src/webgpu/useCameraWebGpuDevice.ts:69](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/useCameraWebGpuDevice.ts#L69)

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
