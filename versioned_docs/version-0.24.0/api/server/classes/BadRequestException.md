# Class: BadRequestException

Defined in: [js-server-sdk/src/exceptions/index.ts:21](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L21)

## Extends

- [`FishjamBaseException`](FishjamBaseException.md)

## Constructors

### Constructor

> **new BadRequestException**(`error`): `BadRequestException`

Defined in: [js-server-sdk/src/exceptions/index.ts:13](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `AxiosError`\<`Record`\<`string`, `string`\>\> |

#### Returns

`BadRequestException`

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`constructor`](FishjamBaseException.md#constructor)

## Properties

### axiosCode?

> `optional` **axiosCode**: `string`

Defined in: [js-server-sdk/src/exceptions/index.ts:11](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L11)

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`axiosCode`](FishjamBaseException.md#axioscode)

***

### details?

> `optional` **details**: `string`

Defined in: [js-server-sdk/src/exceptions/index.ts:12](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L12)

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`details`](FishjamBaseException.md#details)

***

### statusCode

> **statusCode**: `number`

Defined in: [js-server-sdk/src/exceptions/index.ts:10](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/exceptions/index.ts#L10)

#### Inherited from

[`FishjamBaseException`](FishjamBaseException.md).[`statusCode`](FishjamBaseException.md#statuscode)
