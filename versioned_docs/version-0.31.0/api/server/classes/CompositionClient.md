# Class: CompositionClient

Defined in: [js-server-sdk/src/composition.ts:53](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L53)

Client class that allows to manage compositions, the real-time video compositing sessions
of a Fishjam App. It requires the management token that can be retrieved from the Fishjam
Dashboard, the same one used by [FishjamClient](FishjamClient.md).

Example usage:
```
const compositionClient = new CompositionClient({
  managementToken: fastify.config.FISHJAM_MANAGEMENT_TOKEN,
});
```

## Constructors

### Constructor

> **new CompositionClient**(`config`): `CompositionClient`

Defined in: [js-server-sdk/src/composition.ts:62](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L62)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`CompositionConfig`](../type-aliases/CompositionConfig.md) |

#### Returns

`CompositionClient`

## Methods

### compositionUrl()

> **compositionUrl**(`compositionId`): `string`

Defined in: [js-server-sdk/src/composition.ts:93](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L93)

The address of a composition, as other services refer to it. Fishjam needs it to forward a
room's tracks with [FishjamClient.forwardRoomTracks](FishjamClient.md#forwardroomtracks).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |

#### Returns

`string`

***

### createComposition()

> **createComposition**(`config`): `Promise`\<[`Override`](../type-aliases/Override.md)\<`CompositionCreatedResponse`, \{ `compositionId`: [`CompositionId`](../type-aliases/CompositionId.md); \}\>\>

Defined in: [js-server-sdk/src/composition.ts:81](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L81)

Create a new composition. Inputs registered on it are composed into the scenes its outputs render.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`CreateCompositionRequest`](../interfaces/CreateCompositionRequest.md) |

#### Returns

`Promise`\<[`Override`](../type-aliases/Override.md)\<`CompositionCreatedResponse`, \{ `compositionId`: [`CompositionId`](../type-aliases/CompositionId.md); \}\>\>

***

### deleteComposition()

> **deleteComposition**(`compositionId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:122](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L122)

Delete an existing composition. Its inputs and outputs are torn down with it.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |

#### Returns

`Promise`\<`void`\>

***

### registerFont()

> **registerFont**(`compositionId`, `font`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:350](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L350)

Register a font that scenes can render text with. The font is either a `Blob` or a path
to read it from; never pass a path taken from untrusted input, since its contents are uploaded.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `font` | `string` \| `Blob` |

#### Returns

`Promise`\<`void`\>

***

### registerImage()

> **registerImage**(`compositionId`, `imageId`, `image`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:338](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L338)

Register an image that scenes can reference by its renderer ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `imageId` | [`RendererId`](../type-aliases/RendererId.md) |
| `image` | [`ImageSpec`](../type-aliases/ImageSpec.md) |

#### Returns

`Promise`\<`void`\>

***

### registerInput()

> **registerInput**(`compositionId`, `inputId`, `input`): `Promise`\<[`RegisterInputResponse`](../interfaces/RegisterInputResponse.md)\>

Defined in: [js-server-sdk/src/composition.ts:134](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L134)

Register a media source on a composition. Prefer the variant methods, such as
[CompositionClient.registerWhipInput](#registerwhipinput), which return what that input type produces.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `inputId` | [`InputId`](../type-aliases/InputId.md) |
| `input` | [`RegisterInput`](../type-aliases/RegisterInput.md) |

#### Returns

`Promise`\<[`RegisterInputResponse`](../interfaces/RegisterInputResponse.md)\>

***

### registerMp4Input()

> **registerMp4Input**(`compositionId`, `inputId`, `options`): `Promise`\<[`Mp4InputDurations`](../type-aliases/Mp4InputDurations.md)\>

Defined in: [js-server-sdk/src/composition.ts:197](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L197)

Register an input that plays an MP4 file.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `inputId` | [`InputId`](../type-aliases/InputId.md) |
| `options` | `Omit`\<[`Mp4Input`](../interfaces/Mp4Input.md), `"type"`\> |

#### Returns

`Promise`\<[`Mp4InputDurations`](../type-aliases/Mp4InputDurations.md)\>

how much media the file holds, see [Mp4InputDurations](../type-aliases/Mp4InputDurations.md)

***

### registerOutput()

> **registerOutput**(`compositionId`, `outputId`, `output`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:245](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L245)

Register an output, the destination the composed result is sent to, carrying the scene to render.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `outputId` | [`OutputId`](../type-aliases/OutputId.md) |
| `output` | [`RegisterOutput`](../type-aliases/RegisterOutput.md) |

#### Returns

`Promise`\<`void`\>

***

### registerRtmpInput()

> **registerRtmpInput**(`compositionId`, `inputId`, `options`): `Promise`\<`string`\>

Defined in: [js-server-sdk/src/composition.ts:215](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L215)

Register an input that an RTMP publisher pushes media into. The stream key identifies the
input and is carried in the returned address.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `inputId` | [`InputId`](../type-aliases/InputId.md) |
| `options` | `Omit`\<[`RtmpInput`](../interfaces/RtmpInput.md), `"type"`\> |

#### Returns

`Promise`\<`string`\>

the address to publish the RTMP stream to

***

### registerRtmpOutput()

> **registerRtmpOutput**(`compositionId`, `outputId`, `options`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:290](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L290)

Register an output sending the composed result to an RTMP endpoint.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `outputId` | [`OutputId`](../type-aliases/OutputId.md) |
| `options` | `Omit`\<[`RtmpOutput`](../interfaces/RtmpOutput.md), `"type"`\> |

#### Returns

`Promise`\<`void`\>

***

### registerTemplateOutput()

> **registerTemplateOutput**(`compositionId`, `outputId`, `config`, `template`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:258](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L258)

Register an output rendering a template bundle, as built by `@fishjam-cloud/composition-cli`.
The bundle is either a `Blob` or a path to read it from; never pass a path taken from
untrusted input, since its contents are uploaded.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `outputId` | [`OutputId`](../type-aliases/OutputId.md) |
| `config` | [`RegisterOutput`](../type-aliases/RegisterOutput.md) |
| `template` | `string` \| `Blob` |

#### Returns

`Promise`\<`void`\>

***

### registerWhepInput()

> **registerWhepInput**(`compositionId`, `inputId`, `options`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:185](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L185)

Register an input that pulls media from a WHEP endpoint.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `inputId` | [`InputId`](../type-aliases/InputId.md) |
| `options` | `Omit`\<[`WhepInput`](../interfaces/WhepInput.md), `"type"`\> |

#### Returns

`Promise`\<`void`\>

***

### registerWhipInput()

> **registerWhipInput**(`compositionId`, `inputId`, `options`): `Promise`\<[`WhipInputTarget`](../type-aliases/WhipInputTarget.md)\>

Defined in: [js-server-sdk/src/composition.ts:150](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L150)

Register an input that a WHIP publisher pushes media into.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `inputId` | [`InputId`](../type-aliases/InputId.md) |
| `options` | `Omit`\<[`WhipInput`](../interfaces/WhipInput.md), `"type"`\> |

#### Returns

`Promise`\<[`WhipInputTarget`](../type-aliases/WhipInputTarget.md)\>

the address and token to publish with, see [WhipInputTarget](../type-aliases/WhipInputTarget.md)

***

### registerWhipOutput()

> **registerWhipOutput**(`compositionId`, `outputId`, `options`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:279](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L279)

Register an output sending the composed result to a WHIP endpoint.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `outputId` | [`OutputId`](../type-aliases/OutputId.md) |
| `options` | `Omit`\<[`WhipOutput`](../interfaces/WhipOutput.md), `"type"`\> |

#### Returns

`Promise`\<`void`\>

***

### requestKeyframe()

> **requestKeyframe**(`compositionId`, `outputId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:327](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L327)

Ask an output to emit a keyframe, so a viewer joining mid-stream renders a full picture sooner.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `outputId` | [`OutputId`](../type-aliases/OutputId.md) |

#### Returns

`Promise`\<`void`\>

***

### resetComposition()

> **resetComposition**(`compositionId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:111](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L111)

Reset a composition, tearing down its scene while keeping the composition itself alive.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |

#### Returns

`Promise`\<`void`\>

***

### sendEvent()

> **sendEvent**(`compositionId`, `event`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:376](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L376)

Deliver an event to the templates rendered by the composition's outputs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `event` | [`SendCompositionEventRequest`](../interfaces/SendCompositionEventRequest.md) |

#### Returns

`Promise`\<`void`\>

***

### startComposition()

> **startComposition**(`compositionId`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:100](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L100)

Start a composition created with `autostart` disabled. Its outputs begin producing audio and video.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |

#### Returns

`Promise`\<`void`\>

***

### unregisterImage()

> **unregisterImage**(`compositionId`, `imageId`, `options`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:361](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L361)

Unregister a previously registered image.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `imageId` | [`RendererId`](../type-aliases/RendererId.md) |
| `options` | [`UnregisterRenderer`](../interfaces/UnregisterRenderer.md) |

#### Returns

`Promise`\<`void`\>

***

### unregisterInput()

> **unregisterInput**(`compositionId`, `inputId`, `options`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:234](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L234)

Unregister an input. Scenes referencing it stop receiving its media.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `inputId` | [`InputId`](../type-aliases/InputId.md) |
| `options` | [`UnregisterInput`](../interfaces/UnregisterInput.md) |

#### Returns

`Promise`\<`void`\>

***

### unregisterOutput()

> **unregisterOutput**(`compositionId`, `outputId`, `options`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:301](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L301)

Unregister an output. It stops producing audio and video.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `outputId` | [`OutputId`](../type-aliases/OutputId.md) |
| `options` | [`UnregisterOutput`](../interfaces/UnregisterOutput.md) |

#### Returns

`Promise`\<`void`\>

***

### updateOutput()

> **updateOutput**(`compositionId`, `outputId`, `update`): `Promise`\<`void`\>

Defined in: [js-server-sdk/src/composition.ts:316](https://github.com/fishjam-cloud/js-server-sdk/blob/c44594194272c0869ff2315780c4ca7477240fe2/packages/js-server-sdk/src/composition.ts#L316)

Replace the scene an output renders.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `compositionId` | [`CompositionId`](../type-aliases/CompositionId.md) |
| `outputId` | [`OutputId`](../type-aliases/OutputId.md) |
| `update` | [`UpdateOutputRequest`](../interfaces/UpdateOutputRequest.md) |

#### Returns

`Promise`\<`void`\>
