# Interface: PersonSegmentationProvider

Defined in: [core/types.ts:90](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L90)

## Properties

### id

> `readonly` **id**: `string`

Defined in: [core/types.ts:91](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L91)

***

### input

> `readonly` **input**: [`SegmentationInputKind`](../type-aliases/SegmentationInputKind.md)

Defined in: [core/types.ts:92](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L92)

## Methods

### prepare()

> **prepare**(`context`): `Promise`\<[`PersonSegmentationSession`](PersonSegmentationSession.md)\>

Defined in: [core/types.ts:93](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L93)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`SegmentationContext`](SegmentationContext.md) |

#### Returns

`Promise`\<[`PersonSegmentationSession`](PersonSegmentationSession.md)\>
