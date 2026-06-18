# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: Override<NonNullable<AgentResponse[K]>, { peerId: PeerId }>) => void }`

Defined in: [js-server-sdk/src/agent.ts:43](https://github.com/fishjam-cloud/js-server-sdk/blob/d70af8c6517be3f35a70de3a0c4ad33de743db55/packages/js-server-sdk/src/agent.ts#L43)
