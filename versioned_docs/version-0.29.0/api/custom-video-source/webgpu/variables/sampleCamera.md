# Variable: sampleCamera

> `const` **sampleCamera**: `TgpuFn`\<(`uv`) => `d.Vec4f`\>

Defined in: [src/webgpu/cameraShaderBindings.ts:42](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L42)

Samples the live camera and returns upright RGB on both platforms (the Android in-shader BT.709
YUV decode is included automatically). A TypeGPU function you can call from your own TGSL
fragment shaders. It reads the camera texture + sampler declared by
[CameraShaderBindings.bindingDeclarations](../interfaces/CameraShaderBindings.md#bindingdeclarations), which you must prepend to the resolved shader.
