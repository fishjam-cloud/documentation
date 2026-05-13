# Function: usePeers()

> **usePeers**\<`P`, `S`\>(): `object`

Defined in: [packages/mobile-client/src/overrides/hooks.ts:92](https://github.com/fishjam-cloud/web-client-sdk/blob/30f99e0d93a92f6cdd572bab746cc8ce0c853a22/packages/mobile-client/src/overrides/hooks.ts#L92)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `P` | `Record`\<`string`, `unknown`\> |
| `S` | `Record`\<`string`, `unknown`\> |

## Returns

`object`

### localPeer

> **localPeer**: `null` \| [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`P`, `S`\>

### peers

> **peers**: [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`P`, `S`, [`RemoteTrack`](../type-aliases/RemoteTrack.md)\>[]

### remotePeers

> **remotePeers**: [`PeerWithTracks`](../type-aliases/PeerWithTracks.md)\<`P`, `S`, [`RemoteTrack`](../type-aliases/RemoteTrack.md)\>[]
