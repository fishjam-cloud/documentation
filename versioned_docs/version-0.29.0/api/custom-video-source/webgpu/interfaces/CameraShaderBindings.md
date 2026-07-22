# Interface: CameraShaderBindings

Defined in: [src/webgpu/cameraShaderBindings.ts:61](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L61)

Everything a fragment shader needs to sample the live camera. Build once at setup with
[createCameraShaderBindings](../functions/createCameraShaderBindings.md); the fields are safe to capture into the frame worklet.

## Properties

### bindGroupIndex

> `readonly` **bindGroupIndex**: `number`

Defined in: [src/webgpu/cameraShaderBindings.ts:77](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L77)

The group index the bindings are declared at.

***

### bindGroupLayout

> `readonly` **bindGroupLayout**: `GPUBindGroupLayout`

Defined in: [src/webgpu/cameraShaderBindings.ts:73](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L73)

Layout of the camera bind group; place it at [bindGroupIndex](#bindgroupindex) in your pipeline layout.

***

### bindingDeclarations

> `readonly` **bindingDeclarations**: `string`

Defined in: [src/webgpu/cameraShaderBindings.ts:71](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L71)

WGSL declaring the camera `texture_external` and `sampler` at [bindGroupIndex](#bindgroupindex). TypeGPU
cannot emit an external-texture binding, so prepend this to the WGSL your shader resolves to.

***

### sampleCamera

> `readonly` **sampleCamera**: `TgpuFn`\<(`uv`) => `Vec4f`\>

Defined in: [src/webgpu/cameraShaderBindings.ts:66](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L66)

The camera sampler as a TypeGPU function — call `sampleCamera(uv)` from your TGSL fragment
shader. Same value as the exported [sampleCamera](../variables/sampleCamera.md).

***

### sampler

> `readonly` **sampler**: `GPUSampler`

Defined in: [src/webgpu/cameraShaderBindings.ts:75](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L75)

The linear-filtering sampler bound at binding 1.
