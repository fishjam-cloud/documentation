# Function: VoIPProvider()

> **VoIPProvider**(`__namedParameters`): `Element`

Defined in: [mobile-client/src/voip/VoIPProvider.tsx:41](https://github.com/fishjam-cloud/web-client-sdk/blob/fff4e5704db55460ea686103f3be3212df29aed8/packages/mobile-client/src/voip/VoIPProvider.tsx#L41)

Tracks the current VoIP call state, driven by the native CallKit / Core-Telecom
events from [useVoIPEvents](../variables/useVoIPEvents.md), and exposes it through [useVoIP](useVoIP.md).

Joining rooms, peer tokens and media are the consumer's — react to `callStatus` and
report back with `reportConnected` / `reportConnectFailed`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`VoIPProviderProps`](../type-aliases/VoIPProviderProps.md) |

## Returns

`Element`
