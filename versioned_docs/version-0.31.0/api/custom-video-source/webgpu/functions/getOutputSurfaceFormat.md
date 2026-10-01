# Function: getOutputSurfaceFormat()

> **getOutputSurfaceFormat**(): `GPUTextureFormat`

Defined in: [src/webgpu/requiredFeatures.ts:51](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/requiredFeatures.ts#L51)

The pixel format of Fishjam output surfaces on this platform: `'rgba8unorm'` on Android
(AHardwareBuffer), `'bgra8unorm'` on iOS (IOSurface). Use it as the render-target format of any
pipeline that draws into the output texture — a mismatched format renders wrong or black.

## Returns

`GPUTextureFormat`
