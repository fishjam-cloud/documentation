# Interface: FishjamProviderProps

Defined in: [packages/react-client/src/FishjamProvider.tsx:27](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/FishjamProvider.tsx#L27)

## Extends

- `PropsWithChildren`

## Properties

### audioConfig?

> `optional` **audioConfig**: [`StreamConfig`](../type-aliases/StreamConfig.md)

Defined in: [packages/react-client/src/FishjamProvider.tsx:55](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/FishjamProvider.tsx#L55)

Configure whether to use audio simulcast and which layers to send if so.

***

### bandwidthLimits?

> `optional` **bandwidthLimits**: `Partial`\<[`BandwidthLimits`](../type-aliases/BandwidthLimits.md)\>

Defined in: [packages/react-client/src/FishjamProvider.tsx:47](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/FishjamProvider.tsx#L47)

Adjust max bandwidth limit for a single stream and simulcast.

***

### children?

> `optional` **children**: `ReactNode`

Defined in: node\_modules/@types/react/index.d.ts:1398

#### Inherited from

`PropsWithChildren.children`

***

### constraints?

> `optional` **constraints**: `Pick`\<`MediaStreamConstraints`, `"audio"` \| `"video"`\>

Defined in: [packages/react-client/src/FishjamProvider.tsx:38](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/FishjamProvider.tsx#L38)

Set preferred constraints.

#### Param

The media stream constraints as defined by the Web API.

#### See

[MediaStreamConstraints](https://udn.realityripple.com/docs/Web/API/MediaStreamConstraints)

***

### fishjamId

> **fishjamId**: `string`

Defined in: [packages/react-client/src/FishjamProvider.tsx:59](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/FishjamProvider.tsx#L59)

You can get you Fishjam ID at https://fishjam.io/app

***

### persistLastDevice?

> `optional` **persistLastDevice**: `boolean` \| [`PersistLastDeviceHandlers`](../type-aliases/PersistLastDeviceHandlers.md)

Defined in: [packages/react-client/src/FishjamProvider.tsx:43](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/FishjamProvider.tsx#L43)

Decide if you want Fishjam SDK to persist last used device in the local storage.
You can also provide your getter and setter by using the [PersistLastDeviceHandlers](../type-aliases/PersistLastDeviceHandlers.md) interface.

***

### reconnect?

> `optional` **reconnect**: `boolean` \| [`ReconnectConfig`](../type-aliases/ReconnectConfig.md)

Defined in: [packages/react-client/src/FishjamProvider.tsx:32](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/FishjamProvider.tsx#L32)

Use [ReconnectConfig](../type-aliases/ReconnectConfig.md) to adjust reconnection policy to your needs or set false it.
Set to true by default.

***

### videoConfig?

> `optional` **videoConfig**: [`StreamConfig`](../type-aliases/StreamConfig.md)

Defined in: [packages/react-client/src/FishjamProvider.tsx:51](https://github.com/fishjam-cloud/web-client-sdk/blob/cca0d7a57568ca97560c29d27fcd8b63f2678492/packages/react-client/src/FishjamProvider.tsx#L51)

Configure whether to use video simulcast and which layers to send if so.
