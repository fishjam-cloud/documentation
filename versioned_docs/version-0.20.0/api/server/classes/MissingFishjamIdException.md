# Class: MissingFishjamIdException

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:3](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/exceptions/index.ts#L3)

## Extends

- `Error`

## Constructors

### Constructor

> **new MissingFishjamIdException**(): `MissingFishjamIdException`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/exceptions/index.ts:4](https://github.com/fishjam-cloud/js-server-sdk/blob/891a2e978ee650dde85956b1c7d697c5ffa577dc/packages/js-server-sdk/src/exceptions/index.ts#L4)

#### Returns

`MissingFishjamIdException`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

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

Defined in: packages/js-server-sdk/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: packages/js-server-sdk/node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
