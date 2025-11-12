# Type Alias: UseCallKitResult

> **UseCallKitResult** = `object`

Defined in: [packages/react-native-client/src/hooks/useCallKit.ts:14](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/useCallKit.ts#L14)

## Properties

### endCallKitSession()

> **endCallKitSession**: () => `Promise`\<`void`\>

Defined in: [packages/react-native-client/src/hooks/useCallKit.ts:24](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/useCallKit.ts#L24)

Ends the current CallKit session

#### Returns

`Promise`\<`void`\>

***

### getCallKitSessionStatus()

> **getCallKitSessionStatus**: () => `Promise`\<`boolean`\>

Defined in: [packages/react-native-client/src/hooks/useCallKit.ts:29](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/useCallKit.ts#L29)

Returns whether there is currently an active CallKit session

#### Returns

`Promise`\<`boolean`\>

***

### startCallKitSession()

> **startCallKitSession**: (`config`) => `Promise`\<`void`\>

Defined in: [packages/react-native-client/src/hooks/useCallKit.ts:19](https://github.com/fishjam-cloud/mobile-client-sdk/blob/13bc6085d5c0268377acde140fe9c29c39eaf73b/packages/react-native-client/src/hooks/useCallKit.ts#L19)

Starts a CallKit session for the current call

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`CallKitConfig`](CallKitConfig.md) | Configuration object containing displayName and isVideo |

#### Returns

`Promise`\<`void`\>
