# Interface: ManagedPooledTrack

Defined in: [src/internal/useManagedPooledTrack.ts:26](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/internal/useManagedPooledTrack.ts#L26)

State of a pooled custom video track managed by [useManagedPooledTrack](../functions/useManagedPooledTrack.md).
While the pool and track are being created (or after an error) all fields are `null`.

## Properties

### bufferDescriptors

> **bufferDescriptors**: `null` \| [`WorkletBufferDescriptor`](WorkletBufferDescriptor.md)[]

Defined in: [src/internal/useManagedPooledTrack.ts:30](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/internal/useManagedPooledTrack.ts#L30)

Plain per-surface descriptors (the pool object itself is not worklet-serializable).

***

### error

> **error**: `null` \| `Error`

Defined in: [src/internal/useManagedPooledTrack.ts:31](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/internal/useManagedPooledTrack.ts#L31)

***

### stream

> **stream**: `null` \| `MediaStream`

Defined in: [src/internal/useManagedPooledTrack.ts:28](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/internal/useManagedPooledTrack.ts#L28)

***

### track

> **track**: `null` \| `PooledTrack`

Defined in: [src/internal/useManagedPooledTrack.ts:27](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/internal/useManagedPooledTrack.ts#L27)
