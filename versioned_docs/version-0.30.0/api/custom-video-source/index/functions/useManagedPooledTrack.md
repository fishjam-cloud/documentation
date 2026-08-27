# Function: useManagedPooledTrack()

> **useManagedPooledTrack**(`enabled`, `width`, `height`, `poolSize`): [`ManagedPooledTrack`](../interfaces/ManagedPooledTrack.md)

Defined in: [src/internal/useManagedPooledTrack.ts:77](https://github.com/fishjam-cloud/web-client-sdk/blob/be6bc1b673827e28bf8df7bed88de7c874f96db7/packages/react-native-custom-video-source/src/internal/useManagedPooledTrack.ts#L77)

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
