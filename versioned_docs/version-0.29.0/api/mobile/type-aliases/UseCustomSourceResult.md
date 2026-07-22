# Type Alias: UseCustomSourceResult

> **UseCustomSourceResult** = `Omit`\<`ReturnType`\<*typeof* `useCustomSourceReactClient`\>, `"stream"` \| `"setStream"`\> & `object`

Defined in: [mobile-client/src/overrides/types.ts:100](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/overrides/types.ts#L100)

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
