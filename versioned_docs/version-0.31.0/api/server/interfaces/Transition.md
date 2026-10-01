# Interface: Transition

Defined in: composition-openapi/dist/index.d.ts:1272

## Export

Transition

## Properties

### durationMs

> **durationMs**: `number`

Defined in: composition-openapi/dist/index.d.ts:1278

Duration of a transition in milliseconds.

#### Memberof

Transition

***

### easingFunction?

> `optional` **easingFunction**: `null` \| [`EasingFunction`](../type-aliases/EasingFunction.md)

Defined in: composition-openapi/dist/index.d.ts:1284

(**default=`"linear"`**) Easing function to be used for the transition.

#### Memberof

Transition

***

### shouldInterrupt?

> `optional` **shouldInterrupt**: `null` \| `boolean`

Defined in: composition-openapi/dist/index.d.ts:1291

(**default=`false`**) On scene update, if there is already a transition in progress,
it will be interrupted and the new transition will start from the current state.

#### Memberof

Transition
