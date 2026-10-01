# Interface: OutputEndCondition

Defined in: composition-openapi/dist/index.d.ts:2135

This type defines when end of an input stream should trigger end of the output stream. Only one of those fields can be set at the time.
Unless specified otherwise the input stream is considered finished/ended when:
- TCP connection was dropped/closed.
- RTCP Goodbye packet (`BYE`) was received.
- Mp4 track has ended.
- Input was unregistered already (or never registered).

## Export

OutputEndCondition

## Properties

### allInputs?

> `optional` **allInputs**: `null` \| `boolean`

Defined in: composition-openapi/dist/index.d.ts:2159

Terminate output stream if all the input streams finish. In particular, output stream will **be** terminated if no inputs were ever connected.

#### Memberof

OutputEndCondition

***

### allOf?

> `optional` **allOf**: `null` \| `string`[]

Defined in: composition-openapi/dist/index.d.ts:2147

Terminate output stream if all the input streams from the list are finished.

#### Memberof

OutputEndCondition

***

### anyInput?

> `optional` **anyInput**: `null` \| `boolean`

Defined in: composition-openapi/dist/index.d.ts:2153

Terminate output stream if any of the input streams ends. This includes streams added after the output was registered. In particular, output stream will **not be** terminated if no inputs were ever connected.

#### Memberof

OutputEndCondition

***

### anyOf?

> `optional` **anyOf**: `null` \| `string`[]

Defined in: composition-openapi/dist/index.d.ts:2141

Terminate output stream if any of the input streams from the list are finished.

#### Memberof

OutputEndCondition
