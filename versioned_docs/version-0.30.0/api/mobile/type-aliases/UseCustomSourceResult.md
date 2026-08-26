# Type Alias: UseCustomSourceResult

> **UseCustomSourceResult** = `Omit`\<`ReturnType`\<*typeof* `useCustomSourceReactClient`\>, `"stream"` \| `"setStream"`\> & `object`

Defined in: [mobile-client/src/overrides/types.ts:100](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/overrides/types.ts#L100)

## Type declaration

### setStream()

> **setStream**: (`newStream`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newStream` | [`MediaStream`](../classes/MediaStream.md) \| `null` |

#### Returns

`Promise`\<`void`\>

### stream

> **stream**: [`MediaStream`](../classes/MediaStream.md) \| `undefined`
