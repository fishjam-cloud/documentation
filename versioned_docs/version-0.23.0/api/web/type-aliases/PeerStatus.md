# Type Alias: PeerStatus

> **PeerStatus** = `"connecting"` \| `"connected"` \| `"error"` \| `"idle"`

Defined in: [react-client/src/types/public.ts:44](https://github.com/fishjam-cloud/web-client-sdk/blob/086057acaac6bb70cf3b439b0b98e1c0f9f80a67/packages/react-client/src/types/public.ts#L44)

Represents the possible statuses of a peer connection.

- `idle` - Peer is not connected, either never connected or successfully disconnected.
- `connecting` - Peer is in the process of connecting.
- `connected` - Peer has successfully connected.
- `error` - There was an error in the connection process.
