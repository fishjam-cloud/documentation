# Type Alias: TrackType

> **TrackType** = `OpenApiTrackType` \| `"unspecified"`

Defined in: [js-server-sdk/src/types.ts:58](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/types.ts#L58)

Track type as emitted by [FishjamWSNotifier](../classes/FishjamWSNotifier.md). Matches the REST API's `TrackType`,
with the addition of `'unspecified'` for messages whose track type is not set on the wire.
