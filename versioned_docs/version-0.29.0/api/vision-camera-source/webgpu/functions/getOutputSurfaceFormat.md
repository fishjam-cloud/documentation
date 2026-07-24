# Function: getOutputSurfaceFormat()

> **getOutputSurfaceFormat**(): `GPUTextureFormat`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/requiredFeatures.d.ts:24

The pixel format of Fishjam output surfaces on this platform: `'rgba8unorm'` on Android
(AHardwareBuffer), `'bgra8unorm'` on iOS (IOSurface). Use it as the render-target format of any
pipeline that draws into the output texture — a mismatched format renders wrong or black.

## Returns

`GPUTextureFormat`
