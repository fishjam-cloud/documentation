# Interface: CreateCameraShaderBindingsOptions

Defined in: [react-native/webgpu/cameraShaderBindings.ts:80](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L80)

Options for [createCameraShaderBindings](../functions/createCameraShaderBindings.md).

## Properties

### bindGroupIndex?

> `optional` **bindGroupIndex**: `number`

Defined in: [react-native/webgpu/cameraShaderBindings.ts:84](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L84)

Bind group index the camera texture + sampler are declared at. Defaults to `0`.

***

### cameraPixelLayout

> **cameraPixelLayout**: [`CameraPixelLayout`](../type-aliases/CameraPixelLayout.md)

Defined in: [react-native/webgpu/cameraShaderBindings.ts:82](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L82)

How the camera texture's samples are laid out; see [CameraPixelLayout](../type-aliases/CameraPixelLayout.md).
