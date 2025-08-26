# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId } }[K]>) => void }`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/agent.ts:39](https://github.com/fishjam-cloud/js-server-sdk/blob/e133f8a6825619e67537d43e8483134d23c7dce1/packages/js-server-sdk/src/agent.ts#L39)
