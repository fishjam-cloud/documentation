# Function: createCameraShaderBindings()

> **createCameraShaderBindings**(`device`, `options`): [`CameraShaderBindings`](../interfaces/CameraShaderBindings.md)

Defined in: [src/webgpu/cameraShaderBindings.ts:102](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/cameraShaderBindings.ts#L102)

Builds the camera-sampling bindings against the device your pipelines use. Pass the result to
the source hook's `cameraShaderBindings` option and the render context delivers a ready-made
`cameraBindGroup` every frame — set it at [CameraShaderBindings.bindGroupIndex](../interfaces/CameraShaderBindings.md#bindgroupindex) and call
`sampleCamera(uv)` in your fragment shader.

```ts
const cam = createCameraShaderBindings(device);
const fragment = tgpu.fragmentFn({ in: { uv: d.location(0, d.vec2f) }, out: d.vec4f })((input) => {
  return cam.sampleCamera(input.uv);
});
const wgsl = cam.bindingDeclarations + tgpu.resolve({ externals: { fragment } });
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | `GPUDevice` |
| `options` | [`CreateCameraShaderBindingsOptions`](../interfaces/CreateCameraShaderBindingsOptions.md) |

## Returns

[`CameraShaderBindings`](../interfaces/CameraShaderBindings.md)
