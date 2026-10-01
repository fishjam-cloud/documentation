# Interface: PersonSegmentationFrameKernel

Defined in: [core/types.ts:72](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L72)

The per-frame entry points of a segmentation session as standalone worklet functions.
Use this instead of the session methods when frames are processed on another JS runtime
(for example a camera thread): capture the kernel once and call its functions with
`kernel.state`.

## Properties

### state

> `readonly` **state**: [`PersonSegmentationKernelState`](PersonSegmentationKernelState.md)

Defined in: [core/types.ts:73](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L73)

## Methods

### latest()

> **latest**(`state`, `renderTimestampUs`): `null` \| [`PersonMask`](PersonMask.md)

Defined in: [core/types.ts:75](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L75)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`PersonSegmentationKernelState`](PersonSegmentationKernelState.md) |
| `renderTimestampUs` | `number` |

#### Returns

`null` \| [`PersonMask`](PersonMask.md)

***

### offer()

> **offer**(`state`, `input`): `void`

Defined in: [core/types.ts:74](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L74)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`PersonSegmentationKernelState`](PersonSegmentationKernelState.md) |
| `input` | [`SegmentationInput`](../type-aliases/SegmentationInput.md) |

#### Returns

`void`

***

### reset()

> **reset**(`state`): `void`

Defined in: [core/types.ts:79](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L79)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | [`PersonSegmentationKernelState`](PersonSegmentationKernelState.md) |

#### Returns

`void`
