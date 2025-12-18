# Type Alias: EncodingReason

> **EncodingReason** = `"other"` \| `"encoding_inactive"` \| `"low_bandwidth"`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:52](https://github.com/fishjam-cloud/mobile-client-sdk/blob/efa62a8334bae1f0b89394bc9b884c47f9be9b37/packages/react-native-client/src/hooks/usePeers.ts#L52)

Type describing possible reasons of currently selected encoding.

- other - the exact reason couldn't be determined
- encoding_inactive - previously selected encoding became inactive
- low_bandwidth - there is no longer enough bandwidth to maintain previously selected encoding
