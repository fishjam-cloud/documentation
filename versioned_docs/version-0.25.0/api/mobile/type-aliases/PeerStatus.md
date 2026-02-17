# Type Alias: PeerStatus

> **PeerStatus** = `"connecting"` \| `"connected"` \| `"error"` \| `"idle"`

Defined in: packages/react-client/dist/types/public.d.ts:40

Represents the possible statuses of a peer connection.

- `idle` - Peer is not connected, either never connected or successfully disconnected.
- `connecting` - Peer is in the process of connecting.
- `connected` - Peer has successfully connected.
- `error` - There was an error in the connection process.
