# Function: rotationDegreesFromOrientation()

> **rotationDegreesFromOrientation**(`orientation`): `0` \| `90` \| `180` \| `270`

Defined in: [react-native-vision-camera-source/src/orientation.ts:15](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-vision-camera-source/src/orientation.ts#L15)

Maps a VisionCamera frame orientation to the clockwise rotation, in degrees, needed to bring the
frame's pixel data upright: `'up'` → 0, `'right'` → 90, `'down'` → 180, `'left'` → 270.

The source hooks apply this automatically. It is exported for advanced consumers who wire the
low-level frame APIs from `@fishjam-cloud/react-native-webrtc` themselves.

Worklet-safe: call it from a frame callback or from the JS thread.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `orientation` | `CameraOrientation` | A VisionCamera `Frame.orientation` value. |

## Returns

`0` \| `90` \| `180` \| `270`
