# Type Alias: ReconnectionStatus

> **ReconnectionStatus** = `"idle"` \| `"reconnecting"` \| `"error"`

Defined in: [packages/react-native-client/src/hooks/useConnection.ts:16](https://github.com/fishjam-cloud/mobile-client-sdk/blob/76d05a6e62b137b02043a8a00ca762ff218a64b5/packages/react-native-client/src/hooks/useConnection.ts#L16)

Represents the possible statuses of a peer while reconnecting to room

- `idle` - No reconnection in progress. See [PeerStatus](PeerStatus.md) for more details
- `reconnecting` - Peer is in the process of reconnecting.
- `error` - There was an error in the reconnection process.
