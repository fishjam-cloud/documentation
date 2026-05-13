# Class: FishjamAgent

Defined in: [js-server-sdk/src/agent.ts:49](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L49)

## Extends

- `TypedEventEmitter`\<[`AgentEvents`](../type-aliases/AgentEvents.md), `this`\>

## Constructors

### Constructor

> **new FishjamAgent**(`config`, `agentToken`, `callbacks?`): `FishjamAgent`

Defined in: [js-server-sdk/src/agent.ts:56](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L56)

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

Defined in: [js-server-sdk/src/agent.ts:83](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L83)

Await Agent connection to Fishjam.

#### Returns

`Promise`\<`void`\>

***

### captureImage()

> **captureImage**(`trackId`, `timeoutMs`): `Promise`\<`AgentResponse_TrackImage`\>

Defined in: [js-server-sdk/src/agent.ts:144](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L144)

Request a captured image from the given track

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) | `undefined` | the track to capture an image from |
| `timeoutMs` | `number` | `5000` | timeout in milliseconds (default: 5000) |

#### Returns

`Promise`\<`AgentResponse_TrackImage`\>

a promise that resolves with the captured image data

***

### createTrack()

> **createTrack**(`codecParameters`, `metadata`): [`AgentTrack`](../type-aliases/AgentTrack.md)

Defined in: [js-server-sdk/src/agent.ts:91](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L91)

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

Defined in: [js-server-sdk/src/agent.ts:123](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L123)

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

Defined in: [js-server-sdk/src/agent.ts:169](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L169)

#### Returns

`void`

***

### interruptTrack()

> **interruptTrack**(`trackId`): `void`

Defined in: [js-server-sdk/src/agent.ts:114](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L114)

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

Defined in: [js-server-sdk/src/agent.ts:132](https://github.com/fishjam-cloud/js-server-sdk/blob/4b99ad9372d50d79cba6a20651675bff91ed07b0/packages/js-server-sdk/src/agent.ts#L132)

Send audio data for the given track

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `trackId` | [`TrackId`](../type-aliases/TrackId.md) |
| `data` | `Uint8Array` |

#### Returns

`void`
