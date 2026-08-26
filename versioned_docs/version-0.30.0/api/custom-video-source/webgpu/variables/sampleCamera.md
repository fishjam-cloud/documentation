# Variable: sampleCamera

> `const` **sampleCamera**: `TgpuFn`\<(`uv`) => `d.Vec4f`\>

Defined in: [src/webgpu/cameraShaderBindings.ts:42](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L42)

Samples the live camera and returns upright RGB on both platforms (the Android in-shader BT.709
YUV decode is included automatically). A TypeGPU function you can call from your own TGSL
fragment shaders. It reads the camera texture + sampler declared by
[CameraShaderBindings.bindingDeclarations](../interfaces/CameraShaderBindings.md#bindingdeclarations), which you must prepend to the resolved shader.
