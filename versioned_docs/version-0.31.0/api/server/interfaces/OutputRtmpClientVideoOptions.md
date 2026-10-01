# Interface: OutputRtmpClientVideoOptions

Defined in: composition-openapi/dist/index.d.ts:2226

## Export

OutputRtmpClientVideoOptions

## Properties

### initial

> **initial**: [`VideoScene`](VideoScene.md)

Defined in: composition-openapi/dist/index.d.ts:2244

Root of a component tree/scene that should be rendered for the output. Use `update_output` request to update this value after registration. Learn more.

#### Memberof

OutputRtmpClientVideoOptions

***

### resolution

> **resolution**: [`Resolution`](Resolution.md)

Defined in: composition-openapi/dist/index.d.ts:2232

Output resolution in pixels.

#### Memberof

OutputRtmpClientVideoOptions

***

### sendEosWhen?

> `optional` **sendEosWhen**: `null` \| [`OutputEndCondition`](OutputEndCondition.md)

Defined in: composition-openapi/dist/index.d.ts:2238

Condition for termination of the output stream based on the input streams states. If output includes both audio and video streams, then EOS needs to be sent for every type.

#### Memberof

OutputRtmpClientVideoOptions
