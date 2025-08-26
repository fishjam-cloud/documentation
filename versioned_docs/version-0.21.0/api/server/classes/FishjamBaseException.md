# Class: FishjamBaseException

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:9](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/exceptions/index.ts#L9)

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

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:13](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/exceptions/index.ts#L13)

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

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:11](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/exceptions/index.ts#L11)

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

The cause of the error.

#### Inherited from

`Error.cause`

***

### details?

> `optional` **details**: `string`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:12](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/exceptions/index.ts#L12)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: packages/js-server-sdk/node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: packages/js-server-sdk/node\_modules/bun-types/globals.d.ts:990

The maximum number of stack frames to capture.

#### Inherited from

`Error.stackTraceLimit`

***

### statusCode

> **statusCode**: `number`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:10](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/exceptions/index.ts#L10)

## Methods

### captureStackTrace()

#### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: packages/js-server-sdk/node\_modules/bun-types/globals.d.ts:985

Create .stack property on a target object

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

#### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: packages/js-server-sdk/node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

***

### isError()

> `static` **isError**(`value`): `value is Error`

Defined in: packages/js-server-sdk/node\_modules/bun-types/globals.d.ts:980

Check if a value is an instance of Error

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |

#### Returns

`value is Error`

True if the value is an instance of Error, false otherwise

#### Inherited from

`Error.isError`
