# Variable: sampleCamera

> `const` **sampleCamera**: `TgpuFn`\<(`uv`) => `d.Vec4f`\>

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraShaderBindings.d.ts:11

Samples the live camera and returns upright RGB on both platforms (the Android in-shader BT.709
YUV decode is included automatically). A TypeGPU function you can call from your own TGSL
fragment shaders. It reads the camera texture + sampler declared by
[CameraShaderBindings.bindingDeclarations](../interfaces/CameraShaderBindings.md#bindingdeclarations), which you must prepend to the resolved shader.
