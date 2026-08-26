# Function: useVoIP()

> **useVoIP**(): [`VoIPContextValue`](../type-aliases/VoIPContextValue.md)

Defined in: [mobile-client/src/voip/VoIPContext.ts:104](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L104)

Returns the current [VoIPContextValue](../type-aliases/VoIPContextValue.md).

Must be used inside a `VoIPProvider`. Without it the VoIP call machine is not
mounted and this hook throws.

## Returns

[`VoIPContextValue`](../type-aliases/VoIPContextValue.md)
