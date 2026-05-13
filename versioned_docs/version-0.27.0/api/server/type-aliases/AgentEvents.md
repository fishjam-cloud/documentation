# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId }; trackImage?: AgentResponse_TrackImage }[K]>) => void }`

Defined in: [js-server-sdk/src/agent.ts:47](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L47)
