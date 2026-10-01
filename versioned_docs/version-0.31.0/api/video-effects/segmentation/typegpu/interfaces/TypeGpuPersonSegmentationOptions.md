# Interface: TypeGpuPersonSegmentationOptions

Defined in: [segmentation/typegpu/index.ts:36](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/segmentation/typegpu/index.ts#L36)

## Properties

### loadModel()?

> `readonly` `optional` **loadModel**: () => `Promise`\<`ArrayBuffer`\>

Defined in: [segmentation/typegpu/index.ts:44](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/segmentation/typegpu/index.ts#L44)

Supplies the model bytes instead of fetching `modelUrl`, for a model the platform cannot serve
over `fetch`, such as an asset embedded in a React Native release build. Keep the function's
identity stable (create it once), so the parsed model is shared between sessions.

#### Returns

`Promise`\<`ArrayBuffer`\>

***

### modelUrl?

> `readonly` `optional` **modelUrl**: `string`

Defined in: [segmentation/typegpu/index.ts:38](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/segmentation/typegpu/index.ts#L38)

CDN or application asset URL. The default points at this package's bundled model.
