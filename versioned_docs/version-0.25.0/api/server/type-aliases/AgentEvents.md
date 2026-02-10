# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId }; trackImage?: AgentResponse_TrackImage }[K]>) => void }`

Defined in: [js-server-sdk/src/agent.ts:42](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L42)
