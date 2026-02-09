# Function: useVAD()

> **useVAD**(`options`): `Record`\<[`PeerId`](../type-aliases/PeerId.md), `boolean`\>

Defined in: [react-client/src/hooks/useVAD.ts:26](https://github.com/fishjam-cloud/web-client-sdk/blob/d78484b4f189e2789ab2da373043d6e3c10800de/packages/react-client/src/hooks/useVAD.ts#L26)

Voice activity detection. Use this hook to check if voice is detected in audio track for given peer(s).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `peerIds`: readonly [`PeerId`](../type-aliases/PeerId.md)[]; \} | Options object containing `peerIds` - a list of ids of peers to subscribe to for voice activity detection notifications. Example usage: `import { useVAD, type PeerId } from "@fishjam-cloud/react-client"; function WhoIsTalkingComponent({ peerIds }: { peerIds: PeerId[] }) { const peersInfo = useVAD({peerIds}); const activePeers = (Object.keys(peersInfo) as PeerId[]).filter((peerId) => peersInfo[peerId]); return "Now talking: " + activePeers.join(", "); }` |
| `options.peerIds` | readonly [`PeerId`](../type-aliases/PeerId.md)[] | - |

## Returns

`Record`\<[`PeerId`](../type-aliases/PeerId.md), `boolean`\>

Each key is a peerId and the boolean value indicates if voice activity is currently detected for that peer.
