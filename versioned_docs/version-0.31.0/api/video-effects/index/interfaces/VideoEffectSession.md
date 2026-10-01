# Interface: VideoEffectSession\<FrameOptions\>

Defined in: [core/types.ts:135](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L135)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `FrameOptions` | `unknown` |

## Properties

### frameKernel

> `readonly` **frameKernel**: [`VideoEffectFrameKernel`](VideoEffectFrameKernel.md)\<`FrameOptions`\>

Defined in: [core/types.ts:140](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L140)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [core/types.ts:139](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L139)

#### Returns

`void`

***

### encode()

> **encode**(`frame`): `void`

Defined in: [core/types.ts:136](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L136)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `frame` | [`VideoEffectFrame`](VideoEffectFrame.md) |

#### Returns

`void`

***

### offer()

> **offer**(`input`): `void`

Defined in: [core/types.ts:137](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L137)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SegmentationInput`](../type-aliases/SegmentationInput.md) |

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [core/types.ts:138](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L138)

#### Returns

`void`
