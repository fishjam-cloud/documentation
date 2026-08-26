# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: Override<NonNullable<AgentResponse[K]>, { peerId: PeerId }>) => void }`

Defined in: [js-server-sdk/src/agent.ts:43](https://github.com/fishjam-cloud/js-server-sdk/blob/c83334b9d16d3a595427a53d5ddd6043d52a3841/packages/js-server-sdk/src/agent.ts#L43)
