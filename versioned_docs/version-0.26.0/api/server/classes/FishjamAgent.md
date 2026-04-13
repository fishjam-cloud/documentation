# Class: FishjamAgent

Defined in: [js-server-sdk/src/agent.ts:50](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L50)

## Extends

- `TypedEventEmitter`\<[`AgentEvents`](../type-aliases/AgentEvents.md), `this`\>

## Constructors

### Constructor

> **new FishjamAgent**(`config`, `agentToken`, `callbacks?`): `FishjamAgent`

Defined in: [js-server-sdk/src/agent.ts:57](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L57)

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

Defined in: [js-server-sdk/src/agent.ts:84](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L84)

Await Agent connection to Fishjam.

#### Returns

`Promise`\<`void`\>

***

### captureImage()

> **captureImage**(`trackId`, `timeoutMs`): `Promise`\<`AgentResponse_TrackImage`\>

Defined in: [js-server-sdk/src/agent.ts:145](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L145)

Request a captured image from the given track

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `trackId` | `string` | `undefined` | the track to capture an image from |
| `timeoutMs` | `number` | `5000` | timeout in milliseconds (default: 5000) |

#### Returns

`Promise`\<`AgentResponse_TrackImage`\>

a promise that resolves with the captured image data

***

### createTrack()

> **createTrack**(`codecParameters`, `metadata`): [`AgentTrack`](../type-aliases/AgentTrack.md)

Defined in: [js-server-sdk/src/agent.ts:92](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L92)

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

Defined in: [js-server-sdk/src/agent.ts:124](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L124)

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

Defined in: [js-server-sdk/src/agent.ts:170](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L170)

#### Returns

`void`

***

### interruptTrack()

> **interruptTrack**(`trackId`): `void`

Defined in: [js-server-sdk/src/agent.ts:115](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L115)

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

Defined in: [js-server-sdk/src/agent.ts:133](https://github.com/fishjam-cloud/js-server-sdk/blob/0007dea898b99b6923059b364584054cf1580b02/packages/js-server-sdk/src/agent.ts#L133)

Send audio data for the given track

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |
| `data` | `Uint8Array` |

#### Returns

`void`
