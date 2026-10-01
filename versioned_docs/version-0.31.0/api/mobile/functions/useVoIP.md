# Function: useVoIP()

> **useVoIP**(): [`VoIPContextValue`](../type-aliases/VoIPContextValue.md)

Defined in: [mobile-client/src/voip/VoIPContext.ts:104](https://github.com/fishjam-cloud/web-client-sdk/blob/fff4e5704db55460ea686103f3be3212df29aed8/packages/mobile-client/src/voip/VoIPContext.ts#L104)

Returns the current [VoIPContextValue](../type-aliases/VoIPContextValue.md).

Must be used inside a `VoIPProvider`. Without it the VoIP call machine is not
mounted and this hook throws.

## Returns

[`VoIPContextValue`](../type-aliases/VoIPContextValue.md)
