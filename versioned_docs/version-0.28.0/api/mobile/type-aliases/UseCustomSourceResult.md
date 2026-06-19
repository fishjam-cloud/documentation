# Type Alias: UseCustomSourceResult

> **UseCustomSourceResult** = `Omit`\<`ReturnType`\<*typeof* `useCustomSourceReactClient`\>, `"stream"` \| `"setStream"`\> & `object`

Defined in: [packages/mobile-client/src/overrides/types.ts:49](https://github.com/fishjam-cloud/web-client-sdk/blob/9a4ad3270ef2456354c48b507c3cc9c08d58a0c7/packages/mobile-client/src/overrides/types.ts#L49)

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
