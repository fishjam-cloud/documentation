# Class: WhipClient

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:46

## Constructors

### Constructor

> **new WhipClient**(`configurationOptions`, `preferredVideoCodecs?`, `preferredAudioCodecs?`): `WhipClient`

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:51

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `configurationOptions` | `WhipConfigurationOptions` |
| `preferredVideoCodecs?` | `SenderVideoCodecName`[] |
| `preferredAudioCodecs?` | `SenderAudioCodecName`[] |

#### Returns

`WhipClient`

## Methods

### cleanup()

> **cleanup**(): `Promise`\<`void`\>

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:55

#### Returns

`Promise`\<`void`\>

***

### connect()

> **connect**(`connectOptions`): `Promise`\<`void`\>

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:53

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectOptions` | `ConnectOptions` |

#### Returns

`Promise`\<`void`\>

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:54

#### Returns

`Promise`\<`void`\>

***

### getSupportedAudioCodecs()

> `static` **getSupportedAudioCodecs**(): `SenderAudioCodecName`[]

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:56

#### Returns

`SenderAudioCodecName`[]

***

### getSupportedVideoCodecs()

> `static` **getSupportedVideoCodecs**(): `SenderVideoCodecName`[]

Defined in: node\_modules/react-native-whip-whep/build/ReactNativeMobileWhepClientModule.d.ts:57

#### Returns

`SenderVideoCodecName`[]
