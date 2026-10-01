# Function: useCallKit()

> **useCallKit**(): `object`

Defined in: [mobile-client/src/overrides/hooks.ts:134](https://github.com/fishjam-cloud/web-client-sdk/blob/fff4e5704db55460ea686103f3be3212df29aed8/packages/mobile-client/src/overrides/hooks.ts#L134)

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
