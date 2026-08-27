# Class: StaleSdkException

Defined in: [js-server-sdk/src/exceptions/index.ts:7](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/exceptions/index.ts#L7)

## Extends

- `Error`

## Constructors

### Constructor

> **new StaleSdkException**(`status`): `StaleSdkException`

Defined in: [js-server-sdk/src/exceptions/index.ts:10](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/exceptions/index.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | `number` |

#### Returns

`StaleSdkException`

#### Overrides

`Error.constructor`

## Properties

### status

> **status**: `number`

Defined in: [js-server-sdk/src/exceptions/index.ts:9](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/exceptions/index.ts#L9)

Raw wire value received from the server.
