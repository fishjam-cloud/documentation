# Interface: PersonSegmentationKernelState

Defined in: [core/types.ts:62](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L62)

Plain-data state of a segmentation session. It holds only numbers, strings and GPU objects,
so a worklet runtime can copy it; pass it back into every [PersonSegmentationFrameKernel](PersonSegmentationFrameKernel.md)
call.

## Properties

### providerId

> `readonly` **providerId**: `string`

Defined in: [core/types.ts:63](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L63)
