# Type Alias: StreamerInputs

> **StreamerInputs** = \{ `audio?`: `MediaStream` \| `null`; `video`: `MediaStream`; \} \| \{ `audio`: `MediaStream`; `video?`: `null`; \}

Defined in: [react-client/src/hooks/useLivestreamStreamer.ts:7](https://github.com/fishjam-cloud/web-client-sdk/blob/086057acaac6bb70cf3b439b0b98e1c0f9f80a67/packages/react-client/src/hooks/useLivestreamStreamer.ts#L7)

## Type declaration

\{ `audio?`: `MediaStream` \| `null`; `video`: `MediaStream`; \}

### audio?

> `optional` **audio**: `MediaStream` \| `null`

The audio source to publish. e.g. `microphoneStream` from [useMicrophone](../functions/useMicrophone.md) or `stream` from [useScreenShare](../functions/useScreenShare.md)

### video

> **video**: `MediaStream`

The video source to publish. e.g. `cameraStream` from [useCamera](../functions/useCamera.md) or `stream` from [useScreenShare](../functions/useScreenShare.md)

\{ `audio`: `MediaStream`; `video?`: `null`; \}

### audio

> **audio**: `MediaStream`

### video?

> `optional` **video**: `null`
