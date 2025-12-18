# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId } }[K]>) => void }`

Defined in: [js-server-sdk/src/agent.ts:40](https://github.com/fishjam-cloud/js-server-sdk/blob/22932e9e40d6685e876f3295d34a2dc463114ca8/packages/js-server-sdk/src/agent.ts#L40)
