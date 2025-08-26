# Type Alias: ReconnectionStatus

> **ReconnectionStatus** = `"idle"` \| `"reconnecting"` \| `"error"`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:22](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/useConnection.ts#L22)

Represents the possible statuses of a peer while reconnecting to room

- `idle` - No reconnection in progress. See [PeerStatus](PeerStatus.md) for more details
- `reconnecting` - Peer is in the process of reconnecting.
- `error` - There was an error in the reconnection process.
