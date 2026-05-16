# Type Alias: TrackType

> **TrackType** = `OpenApiTrackType` \| `"unspecified"`

Defined in: [js-server-sdk/src/types.ts:37](https://github.com/fishjam-cloud/js-server-sdk/blob/078f24967485d472cccb3de0de191adb81509a38/packages/js-server-sdk/src/types.ts#L37)

Track type as emitted by [FishjamWSNotifier](../classes/FishjamWSNotifier.md). Matches the REST API's `TrackType`,
with the addition of `'unspecified'` for messages whose track type is not set on the wire.
