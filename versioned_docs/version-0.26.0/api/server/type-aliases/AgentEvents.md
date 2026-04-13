# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId }; trackImage?: AgentResponse_TrackImage }[K]>) => void }`

Defined in: [js-server-sdk/src/agent.ts:48](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L48)
