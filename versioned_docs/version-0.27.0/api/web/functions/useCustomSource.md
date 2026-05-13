# Function: useCustomSource()

> **useCustomSource**\<`T`\>(`sourceId`): `object`

Defined in: [react-client/src/hooks/useCustomSource.ts:9](https://github.com/fishjam-cloud/web-client-sdk/blob/30f99e0d93a92f6cdd572bab746cc8ce0c853a22/packages/react-client/src/hooks/useCustomSource.ts#L9)

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
