# Function: attachCameraFrameCallback()

> **attachCameraFrameCallback**(`processor`, `callback`): `Promise`\<[`CameraFrameSubscription`](../interfaces/CameraFrameSubscription.md)\>

Defined in: [index.ts:127](https://github.com/fishjam-cloud/fishjam-react-native-worklets/blob/81249ddd475aabb74ee4bf917931107b318a4879/src/index.ts#L127)

Starts calling `callback` on the camera frame runtime for every frame the
processor's track captures. Each processor can have one callback at a time;
remove the previous subscription before attaching another to the same
processor. Different processors may each have their own.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | `CameraFrameProcessor` |
| `callback` | [`CameraFrameCallback`](../type-aliases/CameraFrameCallback.md) |

## Returns

`Promise`\<[`CameraFrameSubscription`](../interfaces/CameraFrameSubscription.md)\>
