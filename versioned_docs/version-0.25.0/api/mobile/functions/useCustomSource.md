# Function: useCustomSource()

> **useCustomSource**\<`T`\>(`sourceId`): `object`

Defined in: packages/react-client/dist/hooks/useCustomSource.d.ts:5

This hook can register/deregister a custom MediaStream with Fishjam.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sourceId` | `T` |

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
