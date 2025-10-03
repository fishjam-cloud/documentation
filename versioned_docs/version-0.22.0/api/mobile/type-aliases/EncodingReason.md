# Type Alias: EncodingReason

> **EncodingReason** = `"other"` \| `"encoding_inactive"` \| `"low_bandwidth"`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:52](https://github.com/fishjam-cloud/mobile-client-sdk/blob/daab5af2df6e35bf6eb77e09f0242e614359c1ec/packages/react-native-client/src/hooks/usePeers.ts#L52)

Type describing possible reasons of currently selected encoding.

- other - the exact reason couldn't be determined
- encoding_inactive - previously selected encoding became inactive
- low_bandwidth - there is no longer enough bandwidth to maintain previously selected encoding
