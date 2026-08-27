# Type Alias: CurrentCall

> **CurrentCall** = `object`

Defined in: [mobile-client/src/voip/VoIPContext.ts:17](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L17)

Details of the call currently being handled.

## Properties

### displayName

> **displayName**: `string`

Defined in: [mobile-client/src/voip/VoIPContext.ts:24](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L24)

Name shown in the CallKit UI (the remote party).

***

### handle

> **handle**: `string`

Defined in: [mobile-client/src/voip/VoIPContext.ts:29](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L29)

Stable id of the remote party — use a durable user id, not a display name (which
may not be unique), since this is what Recents hands back for redialing.

***

### isOutgoing

> **isOutgoing**: `boolean`

Defined in: [mobile-client/src/voip/VoIPContext.ts:35](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L35)

`true` when this device initiated the call, `false` when receiving it.

***

### isVideo

> **isVideo**: `boolean`

Defined in: [mobile-client/src/voip/VoIPContext.ts:31](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L31)

Whether the call is a video call.

***

### roomName

> **roomName**: `string`

Defined in: [mobile-client/src/voip/VoIPContext.ts:22](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L22)

Fishjam room the call takes place in. For outgoing calls it is the name passed to
`startCall`; for incoming ones it comes from the VoIP push payload.

***

### startedAt

> **startedAt**: `number` \| `null`

Defined in: [mobile-client/src/voip/VoIPContext.ts:33](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/mobile-client/src/voip/VoIPContext.ts#L33)

Timestamp (ms) when the call became `active`, or `null` if not yet connected.
