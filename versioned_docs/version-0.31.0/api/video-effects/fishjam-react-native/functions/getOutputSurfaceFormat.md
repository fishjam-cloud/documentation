# Function: getOutputSurfaceFormat()

> **getOutputSurfaceFormat**(): `GPUTextureFormat`

Defined in: [react-native/webgpu/requiredFeatures.ts:61](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/requiredFeatures.ts#L61)

The pixel format of Fishjam output surfaces on this platform: `'rgba8unorm'` on Android
(AHardwareBuffer), `'bgra8unorm'` on iOS (IOSurface). Use it as the render-target format of any
pipeline that draws into the output texture — a mismatched format renders wrong or black.

## Returns

`GPUTextureFormat`
