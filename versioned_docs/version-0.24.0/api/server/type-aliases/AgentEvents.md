# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId } }[K]>) => void }`

Defined in: [js-server-sdk/src/agent.ts:40](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L40)
