# Type Alias: CompositionConfig

> **CompositionConfig** = `object`

Defined in: [js-server-sdk/src/types.ts:137](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/types.ts#L137)

## Properties

### compositionUrl?

> `optional` **compositionUrl**: `string`

Defined in: [js-server-sdk/src/types.ts:149](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/types.ts#L149)

Address of the Composition API. Only needs setting when running against a
deployment other than production.

***

### managementToken

> **managementToken**: `string`

Defined in: [js-server-sdk/src/types.ts:144](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/types.ts#L144)

Management token is a secret token authorizing to perform actions on your account.
It is the same token [FishjamClient](../classes/FishjamClient.md) is configured with.
Never share this token with anyone.
Visit https://fishjam.io/app/ to get your Management Token.
