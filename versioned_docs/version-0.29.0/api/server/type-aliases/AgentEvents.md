# Type Alias: AgentEvents

> **AgentEvents** = `{ [K in ExpectedAgentEvents]: (message: Override<NonNullable<AgentResponse[K]>, { peerId: PeerId }>) => void }`

Defined in: [js-server-sdk/src/agent.ts:43](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/agent.ts#L43)
