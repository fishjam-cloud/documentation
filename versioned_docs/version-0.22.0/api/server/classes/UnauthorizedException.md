# Class: UnauthorizedException

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:23](https://github.com/fishjam-cloud/js-server-sdk/blob/47c214593e589512a3ba31be9d92be66ca83da9a/packages/js-server-sdk/src/exceptions/index.ts#L23)

## Extends

- [`FishjamBaseException`](FishjamBaseException.md)

## Constructors

### Constructor

> **new UnauthorizedException**(`error`): `UnauthorizedException`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:13](https://github.com/fishjam-cloud/js-server-sdk/blob/47c214593e589512a3ba31be9d92be66ca83da9a/packages/js-server-sdk/src/exceptions/index.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `AxiosError`\<`Record`\<`string`, `string`\>\> |

#### Returns

`UnauthorizedException`

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`constructor`](FishjamBaseException.md#constructor)

## Properties

### axiosCode?

> `optional` **axiosCode**: `string`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:11](https://github.com/fishjam-cloud/js-server-sdk/blob/47c214593e589512a3ba31be9d92be66ca83da9a/packages/js-server-sdk/src/exceptions/index.ts#L11)

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`axiosCode`](FishjamBaseException.md#axioscode)

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

The cause of the error.

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`cause`](FishjamBaseException.md#cause)

***

### details?

> `optional` **details**: `string`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:12](https://github.com/fishjam-cloud/js-server-sdk/blob/47c214593e589512a3ba31be9d92be66ca83da9a/packages/js-server-sdk/src/exceptions/index.ts#L12)

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`details`](FishjamBaseException.md#details)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`message`](FishjamBaseException.md#message)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`name`](FishjamBaseException.md#name)

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

[`FishjamBaseException`](FishjamBaseException.md).[`prepareStackTrace`](FishjamBaseException.md#preparestacktrace)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`stack`](FishjamBaseException.md#stack)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: packages/js-server-sdk/node\_modules/bun-types/globals.d.ts:990

The maximum number of stack frames to capture.

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`stackTraceLimit`](FishjamBaseException.md#stacktracelimit)

***

### statusCode

> **statusCode**: `number`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:10](https://github.com/fishjam-cloud/js-server-sdk/blob/47c214593e589512a3ba31be9d92be66ca83da9a/packages/js-server-sdk/src/exceptions/index.ts#L10)

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`statusCode`](FishjamBaseException.md#statuscode)

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

[`FishjamBaseException`](FishjamBaseException.md).[`captureStackTrace`](FishjamBaseException.md#capturestacktrace)

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

[`FishjamBaseException`](FishjamBaseException.md).[`captureStackTrace`](FishjamBaseException.md#capturestacktrace)

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

[`FishjamBaseException`](FishjamBaseException.md).[`isError`](FishjamBaseException.md#iserror)
