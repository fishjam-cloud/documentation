# Function: useMicrophone()

> **useMicrophone**(): `object`

Defined in: [packages/react-native-client/src/hooks/useMicrophone.ts:12](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useMicrophone.ts#L12)

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
