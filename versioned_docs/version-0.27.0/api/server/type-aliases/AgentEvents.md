# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId }; trackImage?: AgentResponse_TrackImage }[K]>) => void }`

Defined in: [js-server-sdk/src/agent.ts:47](https://github.com/fishjam-cloud/js-server-sdk/blob/078f24967485d472cccb3de0de191adb81509a38/packages/js-server-sdk/src/agent.ts#L47)
