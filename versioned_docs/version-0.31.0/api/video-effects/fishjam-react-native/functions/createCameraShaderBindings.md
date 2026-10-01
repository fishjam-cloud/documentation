# Function: createCameraShaderBindings()

> **createCameraShaderBindings**(`device`, `options`): [`CameraShaderBindings`](../interfaces/CameraShaderBindings.md)

Defined in: [react-native/webgpu/cameraShaderBindings.ts:136](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/webgpu/cameraShaderBindings.ts#L136)

Builds the camera-sampling bindings against the device your pipelines use. Pass the result to
the source hook's `cameraShaderBindings` option and the render context delivers a ready-made
`cameraBindGroup` every frame — set it at [CameraShaderBindings.bindGroupIndex](../interfaces/CameraShaderBindings.md#bindgroupindex) and call
`sampleCamera(uv)` in your fragment shader.

```ts
const cam = createCameraShaderBindings(device, { cameraPixelLayout: 'rgb' });
const fragment = tgpu.fragmentFn({ in: { uv: d.location(0, d.vec2f) }, out: d.vec4f })((input) => {
  return cam.sampleCamera(input.uv);
});
const wgsl = cam.bindingDeclarations + tgpu.resolve([fragment]);
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |
| `options` | [`CreateCameraShaderBindingsOptions`](../interfaces/CreateCameraShaderBindingsOptions.md) |

## Returns

[`CameraShaderBindings`](../interfaces/CameraShaderBindings.md)
