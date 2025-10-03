# Type Alias: PeerStatus

> **PeerStatus** = `"connecting"` \| `"connected"` \| `"error"` \| `"idle"`

Defined in: [packages/react-client/src/types/public.ts:44](https://github.com/fishjam-cloud/web-client-sdk/blob/47e1a8041a7e2ff70090b00d44e1873552c14cbc/packages/react-client/src/types/public.ts#L44)

Represents the possible statuses of a peer connection.

- `idle` - Peer is not connected, either never connected or successfully disconnected.
- `connecting` - Peer is in the process of connecting.
- `connected` - Peer has successfully connected.
- `error` - There was an error in the connection process.
