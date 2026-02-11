# Function: useCamera()

> **useCamera**(): `object`

Defined in: [react-client/src/hooks/devices/useCamera.ts:9](https://github.com/fishjam-cloud/web-client-sdk/blob/b73a7b1d96c4a63909b2bb641aa3285b51a01999/packages/react-client/src/hooks/devices/useCamera.ts#L9)

This hook can toggle camera on/off, change camera, provides current camera and other.

## Returns

### ~~activeCamera~~

> **activeCamera**: `null` \| [`DeviceItem`](../type-aliases/DeviceItem.md) = `cameraManager.activeDevice`

#### Deprecated

Use `currentCamera` and `isCameraOn` instead
Indicates which camera is now turned on and streaming

### cameraDeviceError

> **cameraDeviceError**: `null` \| [`DeviceError`](../type-aliases/DeviceError.md) = `cameraManager.deviceError`

Possible error thrown while setting up the camera

### cameraDevices

> **cameraDevices**: [`DeviceItem`](../type-aliases/DeviceItem.md)[] = `cameraManager.deviceList`

List of available camera devices

### cameraStream

> **cameraStream**: `null` \| `MediaStream`

The MediaStream object containing the current stream

### currentCamera

> **currentCamera**: `null` \| `MediaDeviceInfo` = `cameraManager.selectedDevice`

Indicates which camera is now selected

### currentCameraMiddleware

> **currentCameraMiddleware**: [`TrackMiddleware`](../type-aliases/TrackMiddleware.md) = `videoTrackManager.currentMiddleware`

The currently set camera middleware function

### isCameraOn

> **isCameraOn**: `boolean` = `!!cameraStream`

Indicates whether the camera is streaming video

### selectCamera()

> **selectCamera**: (`deviceId`) => `Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\> = `videoTrackManager.selectDevice`

Selects the camera device

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceId` | `string` |

#### Returns

`Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

### setCameraTrackMiddleware()

> **setCameraTrackMiddleware**: (`middleware`) => `Promise`\<`void`\> = `videoTrackManager.setTrackMiddleware`

Sets the camera middleware

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `middleware` | [`TrackMiddleware`](../type-aliases/TrackMiddleware.md) |

#### Returns

`Promise`\<`void`\>

### startCamera()

> **startCamera**: (`deviceId?`) => `Promise`\<\[`MediaStreamTrack`, `null`\] \| \[`null`, [`DeviceError`](../type-aliases/DeviceError.md)\]\> = `videoTrackManager.startDevice`

Starts the camera

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceId?` | `null` \| `string` |

#### Returns

`Promise`\<\[`MediaStreamTrack`, `null`\] \| \[`null`, [`DeviceError`](../type-aliases/DeviceError.md)\]\>

### stopCamera()

> **stopCamera**: () => `void` = `videoTrackManager.stopDevice`

Stops the camera

#### Returns

`void`

### toggleCamera()

> **toggleCamera**: () => `Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\> = `videoTrackManager.toggleDevice`

Toggles current camera on/off

#### Returns

`Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>
