# Type Alias: PeerStatus

> **PeerStatus** = `"connecting"` \| `"connected"` \| `"error"` \| `"idle"`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:32](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useConnection.ts#L32)

Represents the possible statuses of a peer connection to a room (websocket state).

- `idle` - Peer is not connected, either never connected or successfully disconnected.
- `connecting` - Peer is in the process of connecting.
- `connected` - Peer has successfully connected.
- `error` - There was an error in the connection process.
