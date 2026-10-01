# Interface: CameraEffectMiddlewareOptions

Defined in: [react-native/createCameraEffectMiddleware.ts:20](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/createCameraEffectMiddleware.ts#L20)

## Properties

### height?

> `readonly` `optional` **height**: `number`

Defined in: [react-native/createCameraEffectMiddleware.ts:24](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/createCameraEffectMiddleware.ts#L24)

Height of the published video, in pixels. Defaults to 1280.

***

### onStatus()?

> `readonly` `optional` **onStatus**: (`status`, `error?`) => `void`

Defined in: [react-native/createCameraEffectMiddleware.ts:26](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/createCameraEffectMiddleware.ts#L26)

Reports the effect's loading progress and failures.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`VideoEffectStatus`](../../index/type-aliases/VideoEffectStatus.md) |
| `error?` | `Error` |

#### Returns

`void`

***

### width?

> `readonly` `optional` **width**: `number`

Defined in: [react-native/createCameraEffectMiddleware.ts:22](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/createCameraEffectMiddleware.ts#L22)

Width of the published video, in pixels. Defaults to 720.
