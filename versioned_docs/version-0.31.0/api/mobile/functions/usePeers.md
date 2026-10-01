# Function: usePeers()

> **usePeers**\<`P`, `S`\>(): `object`

Defined in: [mobile-client/src/overrides/hooks.ts:126](https://github.com/fishjam-cloud/web-client-sdk/blob/fff4e5704db55460ea686103f3be3212df29aed8/packages/mobile-client/src/overrides/hooks.ts#L126)

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
