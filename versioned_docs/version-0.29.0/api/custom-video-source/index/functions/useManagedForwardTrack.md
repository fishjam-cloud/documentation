# Function: useManagedForwardTrack()

> **useManagedForwardTrack**(`enabled`): [`ManagedForwardTrack`](../interfaces/ManagedForwardTrack.md)

Defined in: [src/internal/useManagedForwardTrack.ts:29](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/react-native-custom-video-source/src/internal/useManagedForwardTrack.ts#L29)

Owns the async lifecycle of a forwarding custom video track: creates it while `enabled`,
exposes the handle + stream once ready, and stops the tracks on disable/unmount (also when
creation resolves after the owner already unmounted).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

## Returns

[`ManagedForwardTrack`](../interfaces/ManagedForwardTrack.md)
