# Function: useMicrophone()

> **useMicrophone**(): `object`

Defined in: [packages/mobile-client/src/overrides/hooks.ts:36](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/mobile-client/src/overrides/hooks.ts#L36)

## Returns

### ~~activeMicrophone~~

> **activeMicrophone**: `null` \| [`DeviceItem`](../type-aliases/DeviceItem.md)

#### Deprecated

Use `currentMicrophone` and `isMicrophoneOn` instead
Indicates which microphone is now turned on and streaming audio

### currentMicrophone

> **currentMicrophone**: `null` \| `MediaDeviceInfo`

Indicates which microphone is now selected

### currentMicrophoneMiddleware

> **currentMicrophoneMiddleware**: [`TrackMiddleware`](../type-aliases/TrackMiddleware.md)

The currently set microphone middleware function

### isMicrophoneMuted

> **isMicrophoneMuted**: `boolean`

Indicates whether the microphone is muted

### isMicrophoneOn

> **isMicrophoneOn**: `boolean`

Indicates whether the microphone is streaming audio

### microphoneDeviceError

> **microphoneDeviceError**: `null` \| [`DeviceError`](../type-aliases/DeviceError.md)

Possible error thrown while setting up the microphone

### microphoneDevices

> **microphoneDevices**: [`DeviceItem`](../type-aliases/DeviceItem.md)[]

List of available microphone devices

### microphoneStream

> **microphoneStream**: `null` \| `MediaStream`

### selectMicrophone()

> **selectMicrophone**: (`deviceId`) => `Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

Selects the microphone device

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceId` | `string` |

#### Returns

`Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

### setMicrophoneTrackMiddleware()

> **setMicrophoneTrackMiddleware**: (`middleware`) => `Promise`\<`void`\>

Sets the microphone middleware

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `middleware` | [`TrackMiddleware`](../type-aliases/TrackMiddleware.md) |

#### Returns

`Promise`\<`void`\>

### startMicrophone()

> **startMicrophone**: (`deviceId?`) => `Promise`\<\[`MediaStreamTrack`, `null`\] \| \[`null`, [`DeviceError`](../type-aliases/DeviceError.md)\]\>

Starts the microphone

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deviceId?` | `null` \| `string` |

#### Returns

`Promise`\<\[`MediaStreamTrack`, `null`\] \| \[`null`, [`DeviceError`](../type-aliases/DeviceError.md)\]\>

### stopMicrophone()

> **stopMicrophone**: () => `void`

Stops the microphone

#### Returns

`void`

### toggleMicrophone()

> **toggleMicrophone**: () => `Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>

Toggles current microphone on/off

#### Returns

`Promise`\<`undefined` \| [`DeviceError`](../type-aliases/DeviceError.md)\>
