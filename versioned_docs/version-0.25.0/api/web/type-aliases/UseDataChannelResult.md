# Type Alias: UseDataChannelResult

> **UseDataChannelResult** = `object`

Defined in: [react-client/src/types/public.ts:86](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L86)

## Properties

### dataChannelError

> **dataChannelError**: `Error` \| `null`

Defined in: [react-client/src/types/public.ts:119](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L119)

Error that occurred during data publisher operations, or null if no error.

***

### dataChannelLoading

> **dataChannelLoading**: `boolean`

Defined in: [react-client/src/types/public.ts:115](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L115)

Whether data channels are being initialized.

***

### dataChannelReady

> **dataChannelReady**: `boolean`

Defined in: [react-client/src/types/public.ts:111](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L111)

Whether data channels are connected and ready to send data.
Resets to false on disconnect.

***

### initializeDataChannel()

> **initializeDataChannel**: () => `void`

Defined in: [react-client/src/types/public.ts:92](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L92)

Initializes the data channel.

Requires that the fishjam client is already connected.

#### Returns

`void`

***

### publishData()

> **publishData**: (`payload`, `options`) => `void`

Defined in: [react-client/src/types/public.ts:98](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L98)

Sends binary data through a data channel.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | `Uint8Array` | The Uint8Array payload to send (first positional argument) |
| `options` | [`DataChannelOptions`](../interfaces/DataChannelOptions.md) | Data channel options; specify `reliable: true` for guaranteed delivery or `reliable: false` for low latency |

#### Returns

`void`

***

### subscribeData()

> **subscribeData**: (`callback`, `options`) => () => `void`

Defined in: [react-client/src/types/public.ts:106](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/types/public.ts#L106)

Subscribe to incoming data on a data channel.
Can be called before or after channel creation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`DataCallback`](DataCallback.md) | Function called when data is received |
| `options` | [`DataChannelOptions`](../interfaces/DataChannelOptions.md) | Specify `reliable: true` or `reliable: false` to choose channel |

#### Returns

Unsubscribe function - call to cancel the subscription

> (): `void`

##### Returns

`void`
