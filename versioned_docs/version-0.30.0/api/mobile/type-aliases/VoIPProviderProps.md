# Type Alias: VoIPProviderProps

> **VoIPProviderProps** = `PropsWithChildren` & `object`

Defined in: [mobile-client/src/voip/VoIPProvider.tsx:21](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPProvider.tsx#L21)

Props of [VoIPProvider](../functions/VoIPProvider.md) — the configuration of the VoIP call machine.

## Type declaration

### isVideo?

> `optional` **isVideo**: `boolean`

Whether outgoing calls are video calls — reflected in the CallKit session.
Make sure the underlying room type is set accordingly. Defaults to `false` (audio-only).

### onWaitingCallDeclined()?

> `optional` **onWaitingCallDeclined**: (`payload`) => `void`

A waiting or overflow incoming call was declined from native UI. Does not
change local call state - use for signaling (e.g. `call-rejected` to the caller).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`VoIPIncomingPayload`](VoIPIncomingPayload.md) |

#### Returns

`void`
