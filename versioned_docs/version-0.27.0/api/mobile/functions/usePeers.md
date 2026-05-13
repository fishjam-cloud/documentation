# Function: usePeers()

> **usePeers**\<`P`, `S`\>(): `object`

Defined in: [packages/mobile-client/src/overrides/hooks.ts:92](https://github.com/fishjam-cloud/web-client-sdk/blob/9a4ad3270ef2456354c48b507c3cc9c08d58a0c7/packages/mobile-client/src/overrides/hooks.ts#L92)

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
