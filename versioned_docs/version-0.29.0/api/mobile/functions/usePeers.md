# Function: usePeers()

> **usePeers**\<`P`, `S`\>(): `object`

Defined in: [mobile-client/src/overrides/hooks.ts:126](https://github.com/fishjam-cloud/web-client-sdk/blob/90ab3e9c91fcc1e76750599611c08dadb447fd27/packages/mobile-client/src/overrides/hooks.ts#L126)

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
