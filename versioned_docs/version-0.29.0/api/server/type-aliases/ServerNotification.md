# Type Alias: ServerNotification

> **ServerNotification** = `{ [K in ExpectedEvents]: { notification: { channelAdded: Notification<"channelAdded">; channelRemoved: Notification<"channelRemoved">; peerAdded: Notification<"peerAdded">; peerConnected: Notification<"peerConnected">; peerCrashed: Notification<"peerCrashed">; peerDeleted: Notification<"peerDeleted">; peerDisconnected: Notification<"peerDisconnected">; peerMetadataUpdated: Notification<"peerMetadataUpdated">; roomCrashed: Notification<"roomCrashed">; roomCreated: Notification<"roomCreated">; roomDeleted: Notification<"roomDeleted">; streamerConnected: Notification<"streamerConnected">; streamerDisconnected: Notification<"streamerDisconnected">; trackAdded: Notification<"trackAdded">; trackForwarding: Notification<"trackForwarding">; trackForwardingRemoved: Notification<"trackForwardingRemoved">; trackMetadataUpdated: Notification<"trackMetadataUpdated">; trackRemoved: Notification<"trackRemoved">; vadNotification: Notification<"vadNotification">; viewerConnected: Notification<"viewerConnected">; viewerDisconnected: Notification<"viewerDisconnected"> }[K]; type: K } }`\[[`ExpectedEvents`](ExpectedEvents.md)\]

Defined in: [js-server-sdk/src/notifications.ts:203](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/notifications.ts#L203)

A single decoded, mapped server notification tagged with its event type.
The discriminated `type` lets consumers narrow `notification` to the matching
payload (e.g. `if (n.type === 'peerConnected') n.notification.peerType`).
