# Interface: OutputWhipVideoOptions

Defined in: composition-openapi/dist/index.d.ts:2508

## Export

OutputWhipVideoOptions

## Properties

### initial

> **initial**: [`VideoScene`](VideoScene.md)

Defined in: composition-openapi/dist/index.d.ts:2526

Root of a component tree/scene that should be rendered for the output.

#### Memberof

OutputWhipVideoOptions

***

### resolution

> **resolution**: [`Resolution`](Resolution.md)

Defined in: composition-openapi/dist/index.d.ts:2514

Output resolution in pixels.

#### Memberof

OutputWhipVideoOptions

***

### sendEosWhen?

> `optional` **sendEosWhen**: `null` \| [`OutputEndCondition`](OutputEndCondition.md)

Defined in: composition-openapi/dist/index.d.ts:2520

Defines when output stream should end if some of the input streams are finished. If output includes both audio and video streams, then EOS needs to be sent on both.

#### Memberof

OutputWhipVideoOptions
