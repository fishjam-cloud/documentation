# Variable: useVAD()

> `const` **useVAD**: (`options`) => `Record`\<[`PeerId`](../type-aliases/PeerId.md), `boolean`\>

Defined in: packages/react-client/dist/hooks/useVAD.d.ts:21

Voice activity detection. Use this hook to check if voice is detected in audio track for given peer(s).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `peerIds`: `ReadonlyArray`\<[`PeerId`](../type-aliases/PeerId.md)\>; \} | Options object containing `peerIds` - a list of ids of peers to subscribe to for voice activity detection notifications. Example usage: `import { useVAD, type PeerId } from "@fishjam-cloud/react-client"; function WhoIsTalkingComponent({ peerIds }: { peerIds: PeerId[] }) { const peersInfo = useVAD({peerIds}); const activePeers = (Object.keys(peersInfo) as PeerId[]).filter((peerId) => peersInfo[peerId]); return "Now talking: " + activePeers.join(", "); }` |
| `options.peerIds` | `ReadonlyArray`\<[`PeerId`](../type-aliases/PeerId.md)\> | - |

## Returns

`Record`\<[`PeerId`](../type-aliases/PeerId.md), `boolean`\>

Each key is a peerId and the boolean value indicates if voice activity is currently detected for that peer.
