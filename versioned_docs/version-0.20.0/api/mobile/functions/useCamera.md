# Function: useCamera()

> **useCamera**(): `object`

Defined in: [packages/react-native-client/src/hooks/useCamera.ts:121](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useCamera.ts#L121)

This hook can toggle camera on/off and provides current camera state.

## Returns

### cameras

> **cameras**: readonly [`Camera`](../type-aliases/Camera.md)[]

Property that lists cameras available on device.

#### Returns

A promise that resolves to the list of available cameras.

### currentCamera

> **currentCamera**: `null` \| [`Camera`](../type-aliases/Camera.md)

Which camera is now used for streaming (or will be used as default when camera will be enabled)

### isCameraOn

> **isCameraOn**: `boolean`

Informs if user camera is streaming video

### isInitialized

> **isInitialized**: `boolean` = `isCameraInitialized`

A value indicating if camera was already initialized (if `prepareCamera` was called).

### prepareCamera()

> **prepareCamera**: (`config`) => `Promise`\<`boolean`\>

Prepares camera and starts local video track

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | `Readonly`\<[`CameraConfig`](../type-aliases/CameraConfig.md)\> | configuration of the camera capture |

#### Returns

`Promise`\<`boolean`\>

A promise that resolves when camera is started.

### simulcastConfig

> **simulcastConfig**: [`SimulcastConfig`](../type-aliases/SimulcastConfig.md)

Simulcast configuration

### switchCamera()

> **switchCamera**: (`cameraId`) => `Promise`\<`void`\>

Switches to the specified camera.
List of available devices can be retrieved from `cameras` variable

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cameraId` | [`CameraId`](../type-aliases/CameraId.md) |

#### Returns

`Promise`\<`void`\>

A promise that resolves when camera is switched.

### toggleCamera()

> **toggleCamera**: () => `Promise`\<`void`\>

Enable/disable current camera

#### Returns

`Promise`\<`void`\>
