# Class: FishjamAgent

Defined in: [js-server-sdk/src/agent.ts:42](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L42)

## Extends

- `TypedEventEmitter`\<[`AgentEvents`](../type-aliases/AgentEvents.md), `this`\>

## Constructors

### Constructor

> **new FishjamAgent**(`config`, `agentToken`, `callbacks?`): `FishjamAgent`

Defined in: [js-server-sdk/src/agent.ts:48](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`FishjamConfig`](../type-aliases/FishjamConfig.md) |
| `agentToken` | `string` |
| `callbacks?` | [`AgentCallbacks`](../type-aliases/AgentCallbacks.md) |

#### Returns

`FishjamAgent`

#### Overrides

`(EventEmitter as new () => TypedEmitter<AgentEvents>).constructor`

## Methods

### awaitConnected()

> **awaitConnected**(): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/agent.ts:72](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L72)

Await Agent connection to Fishjam.

#### Returns

`Promise`\<`void`\>

***

### createTrack()

> **createTrack**(`codecParameters`, `metadata`): [`AgentTrack`](../type-aliases/AgentTrack.md)

Defined in: [js-server-sdk/src/agent.ts:80](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L80)

Creates an outgoing audio track for the agent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `codecParameters` | [`AudioCodecParameters`](../type-aliases/AudioCodecParameters.md) |
| `metadata` | `object` |

#### Returns

[`AgentTrack`](../type-aliases/AgentTrack.md)

a new audio track

***

### deleteTrack()

> **deleteTrack**(`trackId`): `void`

Defined in: [js-server-sdk/src/agent.ts:112](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L112)

Deletes an outgoing audio track for the agent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [js-server-sdk/src/agent.ts:127](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L127)

#### Returns

`void`

***

### interruptTrack()

> **interruptTrack**(`trackId`): `void`

Defined in: [js-server-sdk/src/agent.ts:103](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L103)

Interrupt track identified by `trackId`.

Any audio that has been sent by the agent, but not played
by Fishjam will be cleared and be prevented from playing.

Audio sent after the interrupt will be played normally.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |

#### Returns

`void`

***

### sendData()

> **sendData**(`trackId`, `data`): `void`

Defined in: [js-server-sdk/src/agent.ts:121](https://github.com/fishjam-cloud/js-server-sdk/blob/eca87e0b5faa981bf89f1f25a67fef9be93d7ea7/packages/js-server-sdk/src/agent.ts#L121)

Send audio data for the given track

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |
| `data` | `Uint8Array` |

#### Returns

`void`
