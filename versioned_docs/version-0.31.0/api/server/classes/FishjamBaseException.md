# Class: FishjamBaseException

Defined in: [js-server-sdk/src/exceptions/index.ts:24](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/exceptions/index.ts#L24)

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
- [`CompositionNotFoundException`](CompositionNotFoundException.md)
- [`InputNotFoundException`](InputNotFoundException.md)
- [`OutputNotFoundException`](OutputNotFoundException.md)
- [`RendererNotFoundException`](RendererNotFoundException.md)
- [`ServiceUnavailableException`](ServiceUnavailableException.md)
- [`QuotaExceededException`](QuotaExceededException.md)
- [`UnknownException`](UnknownException.md)

## Constructors

### Constructor

> **new FishjamBaseException**(`info`): `FishjamBaseException`

Defined in: [js-server-sdk/src/exceptions/index.ts:27](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/exceptions/index.ts#L27)

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

Defined in: [js-server-sdk/src/exceptions/index.ts:26](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/exceptions/index.ts#L26)

***

### statusCode

> **statusCode**: `number`

Defined in: [js-server-sdk/src/exceptions/index.ts:25](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/exceptions/index.ts#L25)
