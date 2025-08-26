# Type Alias: EncodingReason

> **EncodingReason** = `"other"` \| `"encoding_inactive"` \| `"low_bandwidth"`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:52](https://github.com/fishjam-cloud/mobile-client-sdk/blob/b59d08631f5fbe1fa162c766a63916c14024e0d4/packages/react-native-client/src/hooks/usePeers.ts#L52)

Type describing possible reasons of currently selected encoding.

- other - the exact reason couldn't be determined
- encoding_inactive - previously selected encoding became inactive
- low_bandwidth - there is no longer enough bandwidth to maintain previously selected encoding
