# Function: useAudioSettings()

> **useAudioSettings**(): `object`

Defined in: [packages/react-native-client/src/hooks/useAudioSettings.ts:39](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useAudioSettings.ts#L39)

This hook manages audio settings.

## Returns

### availableDevices

> **availableDevices**: [`AudioOutputDevice`](../type-aliases/AudioOutputDevice.md)[]

[Android only] available audio output devices to be set

### selectAudioSessionMode()

> **selectAudioSessionMode**: (`audioSessionMode`) => `Promise`\<`void`\>

[iOS only] selects audio session mode. For more information refer to Apple's documentation:
 https://developer.apple.com/documentation/avfaudio/avaudiosession/mode/

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `audioSessionMode` | [`AudioSessionMode`](../type-aliases/AudioSessionMode.md) |

#### Returns

`Promise`\<`void`\>

### selectedAudioOutputDevice

> **selectedAudioOutputDevice**: `null` \| [`AudioOutputDevice`](../type-aliases/AudioOutputDevice.md)

currently selected output audio device

### selectOutputAudioDevice()

> **selectOutputAudioDevice**: (`device`) => `Promise`\<`void`\>

[Android only] selects output audio device.
For detecting and selecting bluettoth devices make sure you have the BLUETOOTH_CONNECT permission.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `device` | [`AudioOutputDeviceType`](../type-aliases/AudioOutputDeviceType.md) |

#### Returns

`Promise`\<`void`\>

### showAudioRoutePicker()

> **showAudioRoutePicker**: () => `Promise`\<`void`\>

[iOS only] Shows a picker modal that allows user to select output audio device. For more
information refer to Apple's documentation: https://developer.apple.com/documentation/avkit/avroutepickerview

#### Returns

`Promise`\<`void`\>
