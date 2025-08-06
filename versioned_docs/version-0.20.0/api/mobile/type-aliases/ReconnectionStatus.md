# Type Alias: ReconnectionStatus

> **ReconnectionStatus** = `"idle"` \| `"reconnecting"` \| `"error"`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:22](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/useConnection.ts#L22)

Represents the possible statuses of a peer while reconnecting to room

- `idle` - No reconnection in progress. See [PeerStatus](PeerStatus.md) for more details
- `reconnecting` - Peer is in the process of reconnecting.
- `error` - There was an error in the reconnection process.
