# Class: FishjamBaseException

Defined in: [js-server-sdk/src/exceptions/index.ts:9](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L9)

## Extends

- `Error`

## Extended by

- [`BadRequestException`](BadRequestException.md)
- [`UnauthorizedException`](UnauthorizedException.md)
- [`ForbiddenException`](ForbiddenException.md)
- [`RoomNotFoundException`](RoomNotFoundException.md)
- [`FishjamNotFoundException`](FishjamNotFoundException.md)
- [`PeerNotFoundException`](PeerNotFoundException.md)
- [`ServiceUnavailableException`](ServiceUnavailableException.md)
- [`UnknownException`](UnknownException.md)

## Constructors

### Constructor

> **new FishjamBaseException**(`error`): `FishjamBaseException`

Defined in: [js-server-sdk/src/exceptions/index.ts:13](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `AxiosError`\<`Record`\<`string`, `string`\>\> |

#### Returns

`FishjamBaseException`

#### Overrides

`Error.constructor`

## Properties

### axiosCode?

> `optional` **axiosCode**: `string`

Defined in: [js-server-sdk/src/exceptions/index.ts:11](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L11)

***

### details?

> `optional` **details**: `string`

Defined in: [js-server-sdk/src/exceptions/index.ts:12](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L12)

***

### statusCode

> **statusCode**: `number`

Defined in: [js-server-sdk/src/exceptions/index.ts:10](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L10)
