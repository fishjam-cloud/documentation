# Variable: FrameCropParams

> `const` **FrameCropParams**: `d.WgslStruct`\<\{ `cropOrigin`: `d.Vec2f`; `cropSize`: `d.Vec2f`; `sourceSize`: `d.Vec2u`; `uvTransform`: `d.Mat2x2f`; \}\>

Defined in: react-native-custom-video-source/dist/typescript/webgpu/cropUtilities.d.ts:15

The TypeGPU schema for the crop uniform. This is the single source of truth for both the WGSL
`struct FrameCropParams` (emitted when the passthrough shader is resolved) and the byte layout
[packFrameCropParams](../functions/packFrameCropParams.md) writes. Its std140 layout is 40 bytes:

  sourceSize: vec2u  @0   cropOrigin: vec2f @8   cropSize: vec2f @16   uvTransform: mat2x2f @24
