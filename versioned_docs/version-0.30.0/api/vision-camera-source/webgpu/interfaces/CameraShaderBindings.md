# Interface: CameraShaderBindings

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraShaderBindings.d.ts:23

Everything a fragment shader needs to sample the live camera. Build once at setup with
[createCameraShaderBindings](../functions/createCameraShaderBindings.md); the fields are safe to capture into the frame worklet.

## Properties

### bindGroupIndex

> `readonly` **bindGroupIndex**: `number`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraShaderBindings.d.ts:39

The group index the bindings are declared at.

***

### bindGroupLayout

> `readonly` **bindGroupLayout**: `GPUBindGroupLayout`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraShaderBindings.d.ts:35

Layout of the camera bind group; place it at [bindGroupIndex](#bindgroupindex) in your pipeline layout.

***

### bindingDeclarations

> `readonly` **bindingDeclarations**: `string`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraShaderBindings.d.ts:33

WGSL declaring the camera `texture_external` and `sampler` at [bindGroupIndex](#bindgroupindex). TypeGPU
cannot emit an external-texture binding, so prepend this to the WGSL your shader resolves to.

***

### sampleCamera

> `readonly` **sampleCamera**: `TgpuFn`\<(`uv`) => `Vec4f`\>

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraShaderBindings.d.ts:28

The camera sampler as a TypeGPU function — call `sampleCamera(uv)` from your TGSL fragment
shader. Same value as the exported [sampleCamera](../variables/sampleCamera.md).

***

### sampler

> `readonly` **sampler**: `GPUSampler`

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cameraShaderBindings.d.ts:37

The linear-filtering sampler bound at binding 1.
