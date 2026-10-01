# Function: createCameraEffectMiddleware()

> **createCameraEffectMiddleware**(`effect`, `options`): `TrackMiddleware`

Defined in: [react-native/createCameraEffectMiddleware.ts:39](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/createCameraEffectMiddleware.ts#L39)

A camera-track middleware that applies an effect to the camera track Fishjam publishes. Hand it
to `useCamera().setCameraTrackMiddleware`; it stays in place across screens until it is
replaced or cleared with `null`, and `currentCameraMiddleware` tells whether it is active.

```ts
const blur = createCameraEffectMiddleware(createBackgroundBlurEffect(() => ({ segmentation })));
setCameraTrackMiddleware(enabled ? blur : null);
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `effect` | [`VideoEffect`](../../index/interfaces/VideoEffect.md) |
| `options` | [`CameraEffectMiddlewareOptions`](../interfaces/CameraEffectMiddlewareOptions.md) |

## Returns

`TrackMiddleware`
