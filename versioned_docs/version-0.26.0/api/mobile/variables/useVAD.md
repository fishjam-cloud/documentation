# Variable: useVAD()

> `const` **useVAD**: (`options`) => `Record`\<[`PeerId`](../type-aliases/PeerId.md), `boolean`\>

Defined in: packages/react-client/dist/hooks/useVAD.d.ts:29

Voice activity detection. Use this hook to check if voice is detected in the audio track for given peer(s).

Remote peer VAD is driven by `vadNotification` messages from the backend.
If the local peer's id is included in `peerIds`, local VAD is determined client-side
by polling the microphone's audio level (see `useLocalVAD`).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `peerIds`: `ReadonlyArray`\<[`PeerId`](../type-aliases/PeerId.md)\>; \} | Options object. |
| `options.peerIds` | `ReadonlyArray`\<[`PeerId`](../type-aliases/PeerId.md)\> | List of peer ids to subscribe to for VAD notifications. Include the local peer's id to also track whether the local user is speaking. Example usage: `import { useVAD, type PeerId } from "@fishjam-cloud/react-client"; function WhoIsTalkingComponent({ peerIds }: { peerIds: PeerId[] }) { const peersInfo = useVAD({ peerIds }); const activePeers = (Object.keys(peersInfo) as PeerId[]).filter((peerId) => peersInfo[peerId]); return "Now talking: " + activePeers.join(", "); }` |

## Returns

`Record`\<[`PeerId`](../type-aliases/PeerId.md), `boolean`\>

A record where each key is a peer id and the boolean value indicates
whether voice activity is currently detected for that peer.
