# Type Alias: VoIPCallStatus

> **VoIPCallStatus** = `"available"` \| `"incoming"` \| `"connecting"` \| `"active"`

Defined in: [mobile-client/src/voip/VoIPContext.ts:12](https://github.com/fishjam-cloud/web-client-sdk/blob/fff4e5704db55460ea686103f3be3212df29aed8/packages/mobile-client/src/voip/VoIPContext.ts#L12)

Lifecycle state of the current VoIP call.

- `available` — no call in progress
- `incoming` — a call is ringing, awaiting the user's answer
- `connecting` — the call was started/answered; **your app should be joining its room now**
- `active` — your app reported the media connected and the call is in progress
