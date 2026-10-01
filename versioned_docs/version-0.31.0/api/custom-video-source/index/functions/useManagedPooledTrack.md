# Function: useManagedPooledTrack()

> **useManagedPooledTrack**(`enabled`, `width`, `height`, `poolSize`): [`ManagedPooledTrack`](../interfaces/ManagedPooledTrack.md)

Defined in: [src/internal/useManagedPooledTrack.ts:77](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/internal/useManagedPooledTrack.ts#L77)

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
