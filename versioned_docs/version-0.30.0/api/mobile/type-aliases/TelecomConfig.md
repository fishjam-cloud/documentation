# Type Alias: TelecomConfig

> **TelecomConfig** = `object`

Defined in: react-native-webrtc/lib/typescript/Telecom.d.ts:1

## Properties

### displayName

> **displayName**: `string`

Defined in: react-native-webrtc/lib/typescript/Telecom.d.ts:3

Label shown in the system call UI and in the call log.

***

### handle?

> `optional` **handle**: `string`

Defined in: react-native-webrtc/lib/typescript/Telecom.d.ts:9

Stable identifier for the remote party (e.g. a user id), used as the call's Telecom
address. Unlike iOS there is no redial-from-Recents path on Android today, so this is
identity only - it is not handed back to the app. Defaults to `displayName`.

***

### isVideo

> **isVideo**: `boolean`

Defined in: react-native-webrtc/lib/typescript/Telecom.d.ts:10
