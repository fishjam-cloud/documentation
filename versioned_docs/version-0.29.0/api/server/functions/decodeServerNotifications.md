# Function: decodeServerNotifications()

> **decodeServerNotifications**(`data`): [`ServerNotification`](../type-aliases/ServerNotification.md)[]

Defined in: [js-server-sdk/src/webhook.ts:33](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/webhook.ts#L33)

Decode a raw Fishjam webhook body (`application/x-protobuf`) into typed,
mapped notifications.

A room/stream created with `batchWebhookNotifications: true` may deliver
several notifications coalesced into a single `NotificationBatch`; this helper
transparently unwraps that batch, so a single message and a batch are handled
the same way. Notifications are returned in wire order, with the same payload
mapping the [FishjamWSNotifier](../classes/FishjamWSNotifier.md) applies (branded ids, `peerType`/`track`
enums). Non-surfaced variants (handshake, deprecated) are omitted.

Accepts a Node `Buffer` (a `Uint8Array` subclass), a `Uint8Array`, or an
`ArrayBuffer`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ArrayBuffer` \| `Uint8Array`\<`ArrayBufferLike`\> |

## Returns

[`ServerNotification`](../type-aliases/ServerNotification.md)[]

## Example

```ts
import { decodeServerNotifications } from '@fishjam-cloud/js-server-sdk';

declare const body: Uint8Array;
declare const handlePeerConnected: (notification: unknown) => void;
// ---cut---
for (const { type, notification } of decodeServerNotifications(body)) {
  if (type === 'peerConnected') handlePeerConnected(notification);
}
```
