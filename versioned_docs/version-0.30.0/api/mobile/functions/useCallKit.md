# Function: useCallKit()

> **useCallKit**(): `object`

Defined in: [mobile-client/src/overrides/hooks.ts:134](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/overrides/hooks.ts#L134)

## Returns

`object`

### endCallKitSession()

> **endCallKitSession**: (`reason?`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | [`CallEndedReason`](../type-aliases/CallEndedReason.md) |

#### Returns

`Promise`\<`void`\>

### getCallKitSessionStatus()

> **getCallKitSessionStatus**: () => `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

### isHeld()

> **isHeld**: () => `boolean`

#### Returns

`boolean`

### setCallHeld()

> **setCallHeld**: (`onHold`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `onHold` | `boolean` |

#### Returns

`Promise`\<`void`\>

### startCallKitSession()

> **startCallKitSession**: (`config`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`CallKitConfig`](../type-aliases/CallKitConfig.md) |

#### Returns

`Promise`\<`void`\>
