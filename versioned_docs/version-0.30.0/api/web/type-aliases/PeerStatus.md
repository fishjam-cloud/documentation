# Type Alias: PeerStatus

> **PeerStatus** = `"connecting"` \| `"connected"` \| `"error"` \| `"idle"`

Defined in: [react-client/src/types/public.ts:56](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-client/src/types/public.ts#L56)

Represents the possible statuses of a peer connection.

- `idle` - Peer is not connected, either never connected or successfully disconnected.
- `connecting` - Peer is in the process of connecting.
- `connected` - Peer has successfully connected.
- `error` - There was an error in the connection process.
