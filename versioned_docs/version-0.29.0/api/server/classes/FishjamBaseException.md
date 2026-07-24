# Class: FishjamBaseException

Defined in: [js-server-sdk/src/exceptions/index.ts:13](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/exceptions/index.ts#L13)

## Extends

- `Error`

## Extended by

- [`BadRequestException`](BadRequestException.md)
- [`UnauthorizedException`](UnauthorizedException.md)
- [`ForbiddenException`](ForbiddenException.md)
- [`RoomNotFoundException`](RoomNotFoundException.md)
- [`FishjamNotFoundException`](FishjamNotFoundException.md)
- [`InvalidFishjamCredentialsException`](InvalidFishjamCredentialsException.md)
- [`PeerNotFoundException`](PeerNotFoundException.md)
- [`ServiceUnavailableException`](ServiceUnavailableException.md)
- [`QuotaExceededException`](QuotaExceededException.md)
- [`UnknownException`](UnknownException.md)

## Constructors

### Constructor

> **new FishjamBaseException**(`info`): `FishjamBaseException`

Defined in: [js-server-sdk/src/exceptions/index.ts:16](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/exceptions/index.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | [`FishjamExceptionInfo`](../interfaces/FishjamExceptionInfo.md) |

#### Returns

`FishjamBaseException`

#### Overrides

`Error.constructor`

## Properties

### details?

> `optional` **details**: `string`

Defined in: [js-server-sdk/src/exceptions/index.ts:15](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/exceptions/index.ts#L15)

***

### statusCode

> **statusCode**: `number`

Defined in: [js-server-sdk/src/exceptions/index.ts:14](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/exceptions/index.ts#L14)
