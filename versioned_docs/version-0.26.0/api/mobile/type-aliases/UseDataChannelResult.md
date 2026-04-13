# Type Alias: UseDataChannelResult

> **UseDataChannelResult** = `object`

Defined in: packages/react-client/dist/types/public.d.ts:85

## Properties

### dataChannelError

> **dataChannelError**: `Error` \| `null`

Defined in: packages/react-client/dist/types/public.d.ts:118

Error that occurred during data publisher operations, or null if no error.

***

### dataChannelLoading

> **dataChannelLoading**: `boolean`

Defined in: packages/react-client/dist/types/public.d.ts:114

Whether data channels are being initialized.

***

### dataChannelReady

> **dataChannelReady**: `boolean`

Defined in: packages/react-client/dist/types/public.d.ts:110

Whether data channels are connected and ready to send data.
Resets to false on disconnect.

***

### initializeDataChannel()

> **initializeDataChannel**: () => `void`

Defined in: packages/react-client/dist/types/public.d.ts:91

Initializes the data channel.

Requires that the fishjam client is already connected.

#### Returns

`void`

***

### publishData()

> **publishData**: (`payload`, `options`) => `void`

Defined in: packages/react-client/dist/types/public.d.ts:97

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

Defined in: packages/react-client/dist/types/public.d.ts:105

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
