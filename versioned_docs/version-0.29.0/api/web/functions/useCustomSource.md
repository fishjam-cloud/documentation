# Function: useCustomSource()

> **useCustomSource**\<`T`\>(`sourceId`): `object`

Defined in: [react-client/src/hooks/useCustomSource.ts:11](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-client/src/hooks/useCustomSource.ts#L11)

This hook can register/deregister a custom MediaStream with Fishjam.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceId` | `T` | Stable id identifying this custom source. |

## Returns

### setStream()

> **setStream**: (`newStream`) => `Promise`\<`void`\>

Associates the given stream with the custom source.
This stream will be sent to Fishjam after startStreaming has been called.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newStream` | `null` \| `MediaStream` |

#### Returns

`Promise`\<`void`\>

### stream

> **stream**: `undefined` \| `MediaStream`

The MediaStream currently associated with the custom source
