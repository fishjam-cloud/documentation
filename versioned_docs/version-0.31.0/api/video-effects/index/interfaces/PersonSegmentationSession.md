# Interface: PersonSegmentationSession

Defined in: [core/types.ts:82](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L82)

## Properties

### frameKernel

> `readonly` **frameKernel**: [`PersonSegmentationFrameKernel`](PersonSegmentationFrameKernel.md)

Defined in: [core/types.ts:87](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L87)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [core/types.ts:86](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L86)

#### Returns

`void`

***

### latest()

> **latest**(`renderTimestampUs`): `null` \| [`PersonMask`](PersonMask.md)

Defined in: [core/types.ts:84](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L84)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `renderTimestampUs` | `number` |

#### Returns

`null` \| [`PersonMask`](PersonMask.md)

***

### offer()

> **offer**(`frame`): `void`

Defined in: [core/types.ts:83](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L83)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `frame` | [`SegmentationInput`](../type-aliases/SegmentationInput.md) |

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [core/types.ts:85](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L85)

#### Returns

`void`
