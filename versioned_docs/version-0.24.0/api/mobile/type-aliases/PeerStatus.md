# Type Alias: PeerStatus

> **PeerStatus** = `"connecting"` \| `"connected"` \| `"error"` \| `"idle"`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:26](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/useConnection.ts#L26)

Represents the possible statuses of a peer connection to a room (websocket state).

- `idle` - Peer is not connected, either never connected or successfully disconnected.
- `connecting` - Peer is in the process of connecting.
- `connected` - Peer has successfully connected.
- `error` - There was an error in the connection process.
