# Type Alias: ServerNotification

> **ServerNotification** = `{ [K in ExpectedEvents]: { notification: { channelAdded: Notification<"channelAdded">; channelRemoved: Notification<"channelRemoved">; peerAdded: Notification<"peerAdded">; peerConnected: Notification<"peerConnected">; peerCrashed: Notification<"peerCrashed">; peerDeleted: Notification<"peerDeleted">; peerDisconnected: Notification<"peerDisconnected">; peerMetadataUpdated: Notification<"peerMetadataUpdated">; recordingStatusChanged: Notification<"recordingStatusChanged", { recordingId: RecordingId; status: RecordingStatus }>; roomCrashed: Notification<"roomCrashed">; roomCreated: Notification<"roomCreated">; roomDeleted: Notification<"roomDeleted">; streamerConnected: Notification<"streamerConnected">; streamerDisconnected: Notification<"streamerDisconnected">; trackAdded: Notification<"trackAdded">; trackForwarding: Notification<"trackForwarding">; trackForwardingRemoved: Notification<"trackForwardingRemoved">; trackMetadataUpdated: Notification<"trackMetadataUpdated">; trackRemoved: Notification<"trackRemoved">; vadNotification: Notification<"vadNotification">; viewerConnected: Notification<"viewerConnected">; viewerDisconnected: Notification<"viewerDisconnected"> }[K]; type: K } }`\[[`ExpectedEvents`](ExpectedEvents.md)\]

Defined in: [js-server-sdk/src/notifications.ts:247](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/notifications.ts#L247)

A single decoded, mapped server notification tagged with its event type.
The discriminated `type` lets consumers narrow `notification` to the matching
payload (e.g. `if (n.type === 'peerConnected') n.notification.peerType`).
