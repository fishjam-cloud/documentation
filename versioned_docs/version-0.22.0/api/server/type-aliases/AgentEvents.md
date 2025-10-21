# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: NonNullable<{ authenticated?: AgentResponse_Authenticated; trackData?: Omit<AgentResponse_TrackData, "peerId"> & { peerId: PeerId } }[K]>) => void }`

Defined in: [packages/js-server-sdk/packages/js-server-sdk/src/agent.ts:40](https://github.com/fishjam-cloud/js-server-sdk/blob/47c214593e589512a3ba31be9d92be66ca83da9a/packages/js-server-sdk/src/agent.ts#L40)
