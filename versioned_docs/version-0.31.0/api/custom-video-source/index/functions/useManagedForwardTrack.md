# Function: useManagedForwardTrack()

> **useManagedForwardTrack**(`enabled`): [`ManagedForwardTrack`](../interfaces/ManagedForwardTrack.md)

Defined in: [src/internal/useManagedForwardTrack.ts:29](https://github.com/fishjam-cloud/web-client-sdk/blob/8d46ae7e4030c7c5f6a02a73d0fca4e633ebc53f/packages/react-native-custom-video-source/src/internal/useManagedForwardTrack.ts#L29)

Owns the async lifecycle of a forwarding custom video track: creates it while `enabled`,
exposes the handle + stream once ready, and stops the tracks on disable/unmount (also when
creation resolves after the owner already unmounted).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `enabled` | `boolean` |

## Returns

[`ManagedForwardTrack`](../interfaces/ManagedForwardTrack.md)
