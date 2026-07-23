# Function: getOutputSurfaceFormat()

> **getOutputSurfaceFormat**(): `GPUTextureFormat`

Defined in: [src/webgpu/requiredFeatures.ts:51](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/requiredFeatures.ts#L51)

The pixel format of Fishjam output surfaces on this platform: `'rgba8unorm'` on Android
(AHardwareBuffer), `'bgra8unorm'` on iOS (IOSurface). Use it as the render-target format of any
pipeline that draws into the output texture — a mismatched format renders wrong or black.

## Returns

`GPUTextureFormat`
