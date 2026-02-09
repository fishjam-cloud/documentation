# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId } }[K]>) => void }`

Defined in: [js-server-sdk/src/agent.ts:40](https://github.com/fishjam-cloud/js-server-sdk/blob/7aa91272ab7d18fdf42ce6de3cf7585b5d0dd285/packages/js-server-sdk/src/agent.ts#L40)
