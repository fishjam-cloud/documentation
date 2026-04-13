# Type Alias: UseCustomSourceResult

> **UseCustomSourceResult** = `Omit`\<`ReturnType`\<*typeof* `useCustomSourceReactClient`\>, `"stream"` \| `"setStream"`\> & `object`

Defined in: [packages/mobile-client/src/overrides/types.ts:49](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/mobile-client/src/overrides/types.ts#L49)

## Type declaration

### setStream()

> **setStream**: (`newStream`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newStream` | `RNMediaStream` \| `null` |

#### Returns

`Promise`\<`void`\>

### stream

> **stream**: `RNMediaStream` \| `undefined`
