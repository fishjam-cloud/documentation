# Function: useMicrophone()

> **useMicrophone**(): `object`

Defined in: [packages/react-client/src/hooks/devices/useMicrophone.ts:9](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/hooks/devices/useMicrophone.ts#L9)

Manage microphone

## Returns

### ~~activeMicrophone~~

> **activeMicrophone**: `null` \| [`DeviceItem`](../type-aliases/DeviceItem.md) = `microphoneManager.activeDevice`

#### Deprecated

Use `currentMicrophone` and `isMicrophoneOn` instead
Indicates which microphone is now turned on and streaming audio

### currentMicrophone

> **currentMicrophone**: `null` \| `MediaDeviceInfo` = `microphoneManager.selectedDevice`

Indicates which microphone is now selected

### currentMicrophoneMiddleware

> **currentMicrophoneMiddleware**: [`TrackMiddleware`](../type-aliases/TrackMiddleware.md) = `audioTrackManager.currentMiddleware`

The currently set microphone middleware function

### isMicrophoneMuted

> **isMicrophoneMuted**: `boolean` = `!microphoneManager.deviceEnabled`

Indicates whether the microphone is muted

### isMicrophoneOn

> **isMicrophoneOn**: `boolean` = `!!microphoneStream`

Indicates whether the microphone is streaming audio

### microphoneDeviceError

> **microphoneDeviceError**: `null` \| [`DeviceError`](../type-aliases/DeviceError.md) = `microphoneManager.deviceError`

Possible error thrown while setting up the microphone

### microphoneDevices

> **microphoneDevices**: [`DeviceItem`](../type-aliases/DeviceItem.md)[] = `microphoneManager.deviceList`

List of available microphone devices

### microphoneStream

> **microphoneStream**: `null` \| `MediaStream`

The MediaStream object containing the current audio stream

### selectMicrophone()

> **selectMicrophone**: (`deviceId`) => `Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\> = `audioTrackManager.selectDevice`

Selects the microphone device

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceId` | `string` |

#### Returns

`Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

### setMicrophoneTrackMiddleware()

> **setMicrophoneTrackMiddleware**: (`middleware`) => `Promise`\<`void`\> = `audioTrackManager.setTrackMiddleware`

Sets the microphone middleware

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `middleware` | [`TrackMiddleware`](../type-aliases/TrackMiddleware.md) |

#### Returns

`Promise`\<`void`\>

### toggleMicrophone()

> **toggleMicrophone**: () => `Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\> = `audioTrackManager.toggleDevice`

Toggles current microphone on/off

#### Returns

`Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

### toggleMicrophoneMute()

> **toggleMicrophoneMute**: () => `Promise`\<`void`\> = `audioTrackManager.toggleMute`

Mutes/unmutes the microphone

#### Returns

`Promise`\<`void`\>
