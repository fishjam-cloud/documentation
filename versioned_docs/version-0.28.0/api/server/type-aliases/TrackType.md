# Type Alias: TrackType

> **TrackType** = `OpenApiTrackType` \| `"unspecified"`

Defined in: [js-server-sdk/src/types.ts:53](https://github.com/fishjam-cloud/js-server-sdk/blob/d70af8c6517be3f35a70de3a0c4ad33de743db55/packages/js-server-sdk/src/types.ts#L53)

Track type as emitted by [FishjamWSNotifier](../classes/FishjamWSNotifier.md). Matches the REST API's `TrackType`,
with the addition of `'unspecified'` for messages whose track type is not set on the wire.
