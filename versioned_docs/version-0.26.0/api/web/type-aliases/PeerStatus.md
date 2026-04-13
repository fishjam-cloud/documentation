# Type Alias: PeerStatus

> **PeerStatus** = `"connecting"` \| `"connected"` \| `"error"` \| `"idle"`

Defined in: [react-client/src/types/public.ts:53](https://github.com/fishjam-cloud/web-client-sdk/blob/ae228527ec61ba2db2a61a590b4c999f065dcfeb/packages/react-client/src/types/public.ts#L53)

Represents the possible statuses of a peer connection.

- `idle` - Peer is not connected, either never connected or successfully disconnected.
- `connecting` - Peer is in the process of connecting.
- `connected` - Peer has successfully connected.
- `error` - There was an error in the connection process.
