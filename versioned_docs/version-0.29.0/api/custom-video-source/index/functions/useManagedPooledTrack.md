# Function: useManagedPooledTrack()

> **useManagedPooledTrack**(`enabled`, `width`, `height`, `poolSize`): [`ManagedPooledTrack`](../interfaces/ManagedPooledTrack.md)

Defined in: [src/internal/useManagedPooledTrack.ts:77](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/internal/useManagedPooledTrack.ts#L77)

Owns the async lifecycle of a surface pool + pooled custom video track: allocates both while
`enabled` (re-allocates when the dimensions change), exposes worklet-ready descriptors, and
tears down in the correct order (stop tracks, then dispose the pool) on disable/unmount.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |
| `width` | `number` |
| `height` | `number` |
| `poolSize` | `number` |

## Returns

[`ManagedPooledTrack`](../interfaces/ManagedPooledTrack.md)
