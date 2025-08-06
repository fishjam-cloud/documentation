# Type Alias: EncodingReason

> **EncodingReason** = `"other"` \| `"encoding_inactive"` \| `"low_bandwidth"`

Defined in: [packages/react-native-client/src/hooks/usePeers.ts:52](https://github.com/fishjam-cloud/mobile-client-sdk/blob/a60616b68cd043388665165d49f98ce759f80517/packages/react-native-client/src/hooks/usePeers.ts#L52)

Type describing possible reasons of currently selected encoding.

- other - the exact reason couldn't be determined
- encoding_inactive - previously selected encoding became inactive
- low_bandwidth - there is no longer enough bandwidth to maintain previously selected encoding
