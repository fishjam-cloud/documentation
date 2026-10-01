# Interface: VideoEffect\<FrameOptions\>

Defined in: [core/types.ts:143](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L143)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `FrameOptions` | `unknown` |

## Properties

### frameOptions()?

> `readonly` `optional` **frameOptions**: () => `FrameOptions`

Defined in: [core/types.ts:150](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L150)

The effect's live per-frame options, for callers that drive
[VideoEffectSession.frameKernel](VideoEffectSession.md#framekernel) on another runtime.

#### Returns

`FrameOptions`

***

### id

> `readonly` **id**: `string`

Defined in: [core/types.ts:144](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L144)

***

### segmentationInput

> `readonly` **segmentationInput**: [`SegmentationInputKind`](../type-aliases/SegmentationInputKind.md)

Defined in: [core/types.ts:145](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L145)

## Methods

### create()

> **create**(`context`): `Promise`\<[`VideoEffectSession`](VideoEffectSession.md)\<`FrameOptions`\>\>

Defined in: [core/types.ts:151](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L151)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`VideoEffectContext`](VideoEffectContext.md) |

#### Returns

`Promise`\<[`VideoEffectSession`](VideoEffectSession.md)\<`FrameOptions`\>\>
