# Type Alias: UseDataChannelResult

> **UseDataChannelResult** = `object`

Defined in: [react-client/src/types/public.ts:89](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/types/public.ts#L89)

## Properties

### dataChannelError

> **dataChannelError**: `Error` \| `null`

Defined in: [react-client/src/types/public.ts:122](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/types/public.ts#L122)

Error that occurred during data publisher operations, or null if no error.

***

### dataChannelLoading

> **dataChannelLoading**: `boolean`

Defined in: [react-client/src/types/public.ts:118](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/types/public.ts#L118)

Whether data channels are being initialized.

***

### dataChannelReady

> **dataChannelReady**: `boolean`

Defined in: [react-client/src/types/public.ts:114](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/types/public.ts#L114)

Whether data channels are connected and ready to send data.
Resets to false on disconnect.

***

### initializeDataChannel()

> **initializeDataChannel**: () => `void`

Defined in: [react-client/src/types/public.ts:95](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/types/public.ts#L95)

Initializes the data channel.

Requires that the fishjam client is already connected.

#### Returns

`void`

***

### publishData()

> **publishData**: (`payload`, `options`) => `void`

Defined in: [react-client/src/types/public.ts:101](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/types/public.ts#L101)

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

Defined in: [react-client/src/types/public.ts:109](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/types/public.ts#L109)

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
