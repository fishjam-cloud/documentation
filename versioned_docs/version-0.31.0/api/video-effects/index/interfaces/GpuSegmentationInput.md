# Interface: GpuSegmentationInput

Defined in: [core/types.ts:16](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L16)

## Properties

### commandEncoder

> `readonly` **commandEncoder**: `GPUCommandEncoder`

Defined in: [core/types.ts:27](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L27)

***

### height

> `readonly` **height**: `number`

Defined in: [core/types.ts:21](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L21)

***

### kind

> `readonly` **kind**: `"gpu-texture"`

Defined in: [core/types.ts:17](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L17)

***

### texture

> `readonly` **texture**: `GPUTextureView`

Defined in: [core/types.ts:26](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L26)

The upright RGBA frame the effect composites this frame — the same view passed as
[VideoEffectFrame.source](VideoEffectFrame.md#source) — so the mask lines up with the output by construction.

***

### timestampUs

> `readonly` **timestampUs**: `number`

Defined in: [core/types.ts:18](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L18)

***

### width

> `readonly` **width**: `number`

Defined in: [core/types.ts:20](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L20)

Dimensions of [texture](#texture), in pixels.
