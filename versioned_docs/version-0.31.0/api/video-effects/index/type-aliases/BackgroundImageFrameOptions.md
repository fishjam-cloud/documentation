# Type Alias: BackgroundImageFrameOptions

> **BackgroundImageFrameOptions** = `Omit`\<[`BackgroundImageOptions`](../interfaces/BackgroundImageOptions.md), `"segmentation"` \| `"image"`\>

Defined in: [core/types.ts:188](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/core/types.ts#L188)

The image-background options read on every frame: everything except the segmentation
provider and the image itself, which is decoded once on the JS thread.
