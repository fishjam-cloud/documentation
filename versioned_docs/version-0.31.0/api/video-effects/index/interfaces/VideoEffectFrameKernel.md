# Interface: VideoEffectFrameKernel\<FrameOptions\>

Defined in: [core/types.ts:124](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L124)

The per-frame entry points of an effect session as standalone worklet functions, for callers
that encode frames on another JS runtime. `FrameOptions` are the effect's visual options,
supplied on every call because a copied state cannot observe later changes.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `FrameOptions` | `unknown` |

## Properties

### state

> `readonly` **state**: [`VideoEffectKernelState`](VideoEffectKernelState.md)

Defined in: [core/types.ts:125](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L125)

## Methods

### encode()

> **encode**(`state`, `frame`, `options`): `void`

Defined in: [core/types.ts:127](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L127)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`VideoEffectKernelState`](VideoEffectKernelState.md) |
| `frame` | [`VideoEffectFrame`](VideoEffectFrame.md) |
| `options` | `FrameOptions` |

#### Returns

`void`

***

### offer()

> **offer**(`state`, `input`): `void`

Defined in: [core/types.ts:126](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L126)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`VideoEffectKernelState`](VideoEffectKernelState.md) |
| `input` | [`SegmentationInput`](../type-aliases/SegmentationInput.md) |

#### Returns

`void`

***

### reset()

> **reset**(`state`): `void`

Defined in: [core/types.ts:132](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L132)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`VideoEffectKernelState`](VideoEffectKernelState.md) |

#### Returns

`void`
