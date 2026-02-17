# Class: FishjamAgent

Defined in: [js-server-sdk/src/agent.ts:44](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L44)

## Extends

- `TypedEventEmitter`\<[`AgentEvents`](../type-aliases/AgentEvents.md), `this`\>

## Constructors

### Constructor

> **new FishjamAgent**(`config`, `agentToken`, `callbacks?`): `FishjamAgent`

Defined in: [js-server-sdk/src/agent.ts:50](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L50)

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

Defined in: [js-server-sdk/src/agent.ts:74](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L74)

Await Agent connection to Fishjam.

#### Returns

`Promise`\<`void`\>

***

### captureImage()

> **captureImage**(`trackId`): `void`

Defined in: [js-server-sdk/src/agent.ts:132](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L132)

Request a captured image from the given track

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |

#### Returns

`void`

***

### createTrack()

> **createTrack**(`codecParameters`, `metadata`): [`AgentTrack`](../type-aliases/AgentTrack.md)

Defined in: [js-server-sdk/src/agent.ts:82](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L82)

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

Defined in: [js-server-sdk/src/agent.ts:114](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L114)

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

Defined in: [js-server-sdk/src/agent.ts:138](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L138)

#### Returns

`void`

***

### interruptTrack()

> **interruptTrack**(`trackId`): `void`

Defined in: [js-server-sdk/src/agent.ts:105](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L105)

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

Defined in: [js-server-sdk/src/agent.ts:123](https://github.com/fishjam-cloud/js-server-sdk/blob/5093c326f087fbff97ecb84523e27d6e67ca1662/packages/js-server-sdk/src/agent.ts#L123)

Send audio data for the given track

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |
| `data` | `Uint8Array` |

#### Returns

`void`
