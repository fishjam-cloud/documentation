# Function: useMicrophone()

> **useMicrophone**(): `object`

Defined in: [packages/react-native-client/src/hooks/useMicrophone.ts:12](https://github.com/fishjam-cloud/mobile-client-sdk/blob/47936f2f7cc7d0d6100314ad92f0ac25bd097980/packages/react-native-client/src/hooks/useMicrophone.ts#L12)

This hook can toggle microphone on/off and provides current microphone state.

## Returns

### isMicrophoneOn

> **isMicrophoneOn**: `boolean`

Informs if microphone audio track is active

### startMicrophone()

> **startMicrophone**: () => `Promise`\<`void`\>

Starts microphone and requests permission if needed

#### Returns

`Promise`\<`void`\>

### stopMicrophone()

> **stopMicrophone**: () => `Promise`\<`void`\>

Stops microphone (mutes the track without removing it)

#### Returns

`Promise`\<`void`\>

### toggleMicrophone()

> **toggleMicrophone**: () => `Promise`\<`void`\>

Toggles microphone on/off based on the value of `isMicrophoneOn`

#### Returns

`Promise`\<`void`\>
