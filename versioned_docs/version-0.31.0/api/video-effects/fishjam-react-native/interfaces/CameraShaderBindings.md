# Interface: CameraShaderBindings

Defined in: [react-native/webgpu/cameraShaderBindings.ts:93](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L93)

Everything a fragment shader needs to sample the live camera. Build once at setup with
[createCameraShaderBindings](../functions/createCameraShaderBindings.md); the fields are safe to capture into the frame worklet.

## Properties

### bindGroupIndex

> `readonly` **bindGroupIndex**: `number`

Defined in: [react-native/webgpu/cameraShaderBindings.ts:111](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L111)

The group index the bindings are declared at.

***

### bindGroupLayout

> `readonly` **bindGroupLayout**: `GPUBindGroupLayout`

Defined in: [react-native/webgpu/cameraShaderBindings.ts:107](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L107)

Layout of the camera bind group; place it at [bindGroupIndex](#bindgroupindex) in your pipeline layout.

***

### bindingDeclarations

> `readonly` **bindingDeclarations**: `string`

Defined in: [react-native/webgpu/cameraShaderBindings.ts:105](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L105)

WGSL declaring the camera `texture_external` and `sampler` at [bindGroupIndex](#bindgroupindex). TypeGPU
cannot emit an external-texture binding, so prepend this to the WGSL your shader resolves to.

***

### cameraPixelLayout

> `readonly` **cameraPixelLayout**: [`CameraPixelLayout`](../type-aliases/CameraPixelLayout.md)

Defined in: [react-native/webgpu/cameraShaderBindings.ts:100](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L100)

The pixel layout the sampler decodes.

***

### sampleCamera

> `readonly` **sampleCamera**: [`SampleCameraFn`](../type-aliases/SampleCameraFn.md)

Defined in: [react-native/webgpu/cameraShaderBindings.ts:98](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L98)

The camera sampler as a TypeGPU function — call `sampleCamera(uv)` from your TGSL fragment
shader. Same value as sampleCameraForPixelLayout for [cameraPixelLayout](#camerapixellayout).

***

### sampler

> `readonly` **sampler**: `GPUSampler`

Defined in: [react-native/webgpu/cameraShaderBindings.ts:109](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L109)

The linear-filtering sampler bound at binding 1.
