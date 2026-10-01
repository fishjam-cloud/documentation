# Variable: FrameCropParams

> `const` **FrameCropParams**: `WgslStruct`\<\{ `cropOrigin`: `Vec2f`; `cropSize`: `Vec2f`; `sourceSize`: `Vec2u`; `uvTransform`: `Mat2x2f`; \}\>

Defined in: [src/webgpu/cropUtilities.ts:17](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/webgpu/cropUtilities.ts#L17)

The TypeGPU schema for the crop uniform. This is the single source of truth for both the WGSL
`struct FrameCropParams` (emitted when the passthrough shader is resolved) and the byte layout
[packFrameCropParams](../functions/packFrameCropParams.md) writes. Its std140 layout is 40 bytes:

  sourceSize: vec2u  @0   cropOrigin: vec2f @8   cropSize: vec2f @16   uvTransform: mat2x2f @24
