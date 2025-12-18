# Type Alias: PeerStatus

> **PeerStatus** = `"connecting"` \| `"connected"` \| `"error"` \| `"idle"`

Defined in: [react-client/src/types/public.ts:44](https://github.com/fishjam-cloud/web-client-sdk/blob/a1e4bfe8ef582d1924accb8053fa0de389380124/packages/react-client/src/types/public.ts#L44)

Represents the possible statuses of a peer connection.

- `idle` - Peer is not connected, either never connected or successfully disconnected.
- `connecting` - Peer is in the process of connecting.
- `connected` - Peer has successfully connected.
- `error` - There was an error in the connection process.
