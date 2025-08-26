# Class: WhepClient

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:59

## Constructors

### Constructor

> **new WhepClient**(`configurationOptions`, `preferredVideoCodecs?`, `preferredAudioCodecs?`): `WhepClient`

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `configurationOptions` | `WhepConfigurationOptions` |
| `preferredVideoCodecs?` | `ReceiverVideoCodecName`[] |
| `preferredAudioCodecs?` | `ReceiverAudioCodecName`[] |

#### Returns

`WhepClient`

## Methods

### connect()

> **connect**(`connectOptions`): `Promise`\<`void`\>

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:70

Connects to the WHEP server defined while creating WHEP client.
Allows user to receive video and audio stream.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectOptions` | `ConnectOptions` |

#### Returns

`Promise`\<`void`\>

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:75

Disconnects from the WHEP server defined while creating WHEP client.
Frees the resources.

#### Returns

`Promise`\<`void`\>
