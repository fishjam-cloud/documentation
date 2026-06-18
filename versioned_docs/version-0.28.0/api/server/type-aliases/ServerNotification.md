# Type Alias: ServerNotification

> **ServerNotification** = `{ [K in ExpectedEvents]: { notification: { channelAdded: Notification<"channelAdded">; channelRemoved: Notification<"channelRemoved">; peerAdded: Notification<"peerAdded">; peerConnected: Notification<"peerConnected">; peerCrashed: Notification<"peerCrashed">; peerDeleted: Notification<"peerDeleted">; peerDisconnected: Notification<"peerDisconnected">; peerMetadataUpdated: Notification<"peerMetadataUpdated">; roomCrashed: Notification<"roomCrashed">; roomCreated: Notification<"roomCreated">; roomDeleted: Notification<"roomDeleted">; streamerConnected: Notification<"streamerConnected">; streamerDisconnected: Notification<"streamerDisconnected">; trackAdded: Notification<"trackAdded">; trackMetadataUpdated: Notification<"trackMetadataUpdated">; trackRemoved: Notification<"trackRemoved">; viewerConnected: Notification<"viewerConnected">; viewerDisconnected: Notification<"viewerDisconnected"> }[K]; type: K } }`\[[`ExpectedEvents`](ExpectedEvents.md)\]

Defined in: [js-server-sdk/src/notifications.ts:178](https://github.com/fishjam-cloud/js-server-sdk/blob/d70af8c6517be3f35a70de3a0c4ad33de743db55/packages/js-server-sdk/src/notifications.ts#L178)

A single decoded, mapped server notification tagged with its event type.
The discriminated `type` lets consumers narrow `notification` to the matching
payload (e.g. `if (n.type === 'peerConnected') n.notification.peerType`).
