# Class: FishjamBaseException

Defined in: [js-server-sdk/src/exceptions/index.ts:24](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/exceptions/index.ts#L24)

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
- [`RecordingNotFoundException`](RecordingNotFoundException.md)
- [`ServiceUnavailableException`](ServiceUnavailableException.md)
- [`QuotaExceededException`](QuotaExceededException.md)
- [`UnknownException`](UnknownException.md)

## Constructors

### Constructor

> **new FishjamBaseException**(`info`): `FishjamBaseException`

Defined in: [js-server-sdk/src/exceptions/index.ts:27](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/exceptions/index.ts#L27)

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

Defined in: [js-server-sdk/src/exceptions/index.ts:26](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/exceptions/index.ts#L26)

***

### statusCode

> **statusCode**: `number`

Defined in: [js-server-sdk/src/exceptions/index.ts:25](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/exceptions/index.ts#L25)
