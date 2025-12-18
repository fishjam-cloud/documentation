# Function: useVAD()

> **useVAD**(`peerIds`): `Record`\<[`PeerId`](../type-aliases/PeerId.md), `boolean`\>

Defined in: [react-client/src/hooks/useVAD.ts:25](https://github.com/fishjam-cloud/web-client-sdk/blob/107b6ffadabe4f3f1c2f36f2cea7ac93db908c8c/packages/react-client/src/hooks/useVAD.ts#L25)

Voice activity detection. Use this hook to check if voice is detected in audio track for given peer(s).

Example usage:
```tsx
import { useVAD, type PeerId } from "@fishjam-cloud/react-client";
function WhoIsTalkingComponent({ peerIds }: { peerIds: PeerId[] }) {
  const peersInfo = useVAD({peerIds});
  const activePeers = (Object.keys(peersInfo) as PeerId[]).filter((peerId) => peersInfo[peerId]);

  return `Now talking: ${activePeers.join(", ")}`;
}
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `peerIds` | \{ `peerIds`: readonly [`PeerId`](../type-aliases/PeerId.md)[]; \} | List of ids of peers to subscribe to for voice activity detection notifications. |
| `peerIds.peerIds` | readonly [`PeerId`](../type-aliases/PeerId.md)[] | - |

## Returns

`Record`\<[`PeerId`](../type-aliases/PeerId.md), `boolean`\>

Each key is a peerId and the boolean value indicates if voice activity is currently detected for that peer.
