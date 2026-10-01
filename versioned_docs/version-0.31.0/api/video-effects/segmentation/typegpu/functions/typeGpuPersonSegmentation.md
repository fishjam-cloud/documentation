# Function: typeGpuPersonSegmentation()

> **typeGpuPersonSegmentation**(`options`): [`PersonSegmentationProvider`](../../../index/interfaces/PersonSegmentationProvider.md)

Defined in: [segmentation/typegpu/index.ts:63](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/segmentation/typegpu/index.ts#L63)

Experimental fixed-graph MediaPipe Selfie Segmentation provider. It encodes
inference into the caller's command encoder and returns a GPU-only mask.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TypeGpuPersonSegmentationOptions`](../interfaces/TypeGpuPersonSegmentationOptions.md) |

## Returns

[`PersonSegmentationProvider`](../../../index/interfaces/PersonSegmentationProvider.md)
