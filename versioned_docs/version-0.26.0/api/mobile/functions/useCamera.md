# Function: useCamera()

> **useCamera**(): `object`

Defined in: [packages/mobile-client/src/overrides/hooks.ts:28](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/mobile-client/src/overrides/hooks.ts#L28)

## Returns

### ~~activeCamera~~

> **activeCamera**: `null` \| [`DeviceItem`](../type-aliases/DeviceItem.md)

#### Deprecated

Use `currentCamera` and `isCameraOn` instead
Indicates which camera is now turned on and streaming

### cameraDeviceError

> **cameraDeviceError**: `null` \| [`DeviceError`](../type-aliases/DeviceError.md)

Possible error thrown while setting up the camera

### cameraDevices

> **cameraDevices**: [`DeviceItem`](../type-aliases/DeviceItem.md)[]

List of available camera devices

### cameraStream

> **cameraStream**: `null` \| `MediaStream`

### currentCamera

> **currentCamera**: `null` \| `MediaDeviceInfo`

Indicates which camera is now selected

### currentCameraMiddleware

> **currentCameraMiddleware**: [`TrackMiddleware`](../type-aliases/TrackMiddleware.md)

The currently set camera middleware function

### isCameraOn

> **isCameraOn**: `boolean`

Indicates whether the camera is streaming video

### selectCamera()

> **selectCamera**: (`deviceId`) => `Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

Selects the camera device

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceId` | `string` |

#### Returns

`Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

### setCameraTrackMiddleware()

> **setCameraTrackMiddleware**: (`middleware`) => `Promise`\<`void`\>

Sets the camera middleware

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `middleware` | [`TrackMiddleware`](../type-aliases/TrackMiddleware.md) |

#### Returns

`Promise`\<`void`\>

### startCamera()

> **startCamera**: (`deviceId?`) => `Promise`\<\[`MediaStreamTrack`, `null`\] \| \[`null`, [`DeviceError`](../type-aliases/DeviceError.md)\]\>

Starts the camera

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceId?` | `null` \| `string` |

#### Returns

`Promise`\<\[`MediaStreamTrack`, `null`\] \| \[`null`, [`DeviceError`](../type-aliases/DeviceError.md)\]\>

### stopCamera()

> **stopCamera**: () => `void`

Stops the camera

#### Returns

`void`

### toggleCamera()

> **toggleCamera**: () => `Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

Toggles current camera on/off

#### Returns

`Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>
