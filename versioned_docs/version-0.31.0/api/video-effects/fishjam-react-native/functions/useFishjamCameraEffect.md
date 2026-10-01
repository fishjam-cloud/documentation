# Function: useFishjamCameraEffect()

> **useFishjamCameraEffect**(`effect`, `options`): [`FishjamCameraEffectResult`](../interfaces/FishjamCameraEffectResult.md)

Defined in: [react-native/useFishjamCameraEffect.ts:58](https://github.com/fishjam-cloud/video-effects/blob/105f9d09c97fccd46cd169db56e58aa052d75531/src/react-native/useFishjamCameraEffect.ts#L58)

Applies an effect to the camera track Fishjam publishes, through `useCamera`'s camera-track
middleware. Pass `null` to publish the plain camera again. While the effect is still loading,
the camera is published untouched, so the track is never black.

```tsx
const blur = useBackgroundBlur({ segmentation, radius: 24 });
const { status, error } = useFishjamCameraEffect(blurEnabled ? blur : null);
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `effect` | `null` \| [`VideoEffect`](../../index/interfaces/VideoEffect.md)\<`unknown`\> |
| `options` | [`FishjamCameraEffectOptions`](../interfaces/FishjamCameraEffectOptions.md) |

## Returns

[`FishjamCameraEffectResult`](../interfaces/FishjamCameraEffectResult.md)
