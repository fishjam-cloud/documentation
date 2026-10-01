# Interface: Rescaler

Defined in: composition-openapi/dist/index.d.ts:1319

## Export

Rescaler

## Properties

### borderColor?

> `optional` **borderColor**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1432

(**default=`"#00000000"`**) Border color in a `"#RRGGBBAA"` format.

#### Memberof

Rescaler

***

### borderRadius?

> `optional` **borderRadius**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1420

(**default=`0.0`**) Radius of a rounded corner.

#### Memberof

Rescaler

***

### borderWidth?

> `optional` **borderWidth**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1426

(**default=`0.0`**) Border width.

#### Memberof

Rescaler

***

### bottom?

> `optional` **bottom**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1392

Distance in pixels between the bottom edge of this component and the bottom edge of its
parent (including a border). If this field is defined, this element will be absolutely
positioned, instead of being laid out by its parent.

#### Memberof

Rescaler

***

### boxShadow?

> `optional` **boxShadow**: `null` \| [`BoxShadow`](BoxShadow.md)[]

Defined in: composition-openapi/dist/index.d.ts:1438

List of box shadows.

#### Memberof

Rescaler

***

### child

> **child**: [`Component`](../type-aliases/Component.md)

Defined in: composition-openapi/dist/index.d.ts:1331

List of component's children.

#### Memberof

Rescaler

***

### height?

> `optional` **height**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1369

Height of a component in pixels (without a border). Exact behavior might be different
based on the parent component:
- If the parent component is a layout, check sections "Absolute positioning" and "Static
  positioning" of that component.
- If the parent component is not a layout, then this field is required.

#### Memberof

Rescaler

***

### horizontalAlign?

> `optional` **horizontalAlign**: `null` \| [`HorizontalAlign`](../type-aliases/HorizontalAlign.md)

Defined in: composition-openapi/dist/index.d.ts:1343

(**default=`"center"`**) Horizontal alignment.

#### Memberof

Rescaler

***

### id?

> `optional` **id**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1325

Id of a component.

#### Memberof

Rescaler

***

### left?

> `optional` **left**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1384

Distance in pixels between this component's left edge and its parent's left edge (including a border).
If this field is defined, this element will be absolutely positioned, instead of being
laid out by its parent.

#### Memberof

Rescaler

***

### mode?

> `optional` **mode**: `null` \| [`RescaleMode`](../type-aliases/RescaleMode.md)

Defined in: composition-openapi/dist/index.d.ts:1337

(**default=`"fit"`**) Resize mode:

#### Memberof

Rescaler

***

### right?

> `optional` **right**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1400

Distance in pixels between this component's right edge and its parent's right edge.
If this field is defined, this element will be absolutely positioned, instead of being
laid out by its parent.

#### Memberof

Rescaler

***

### rotation?

> `optional` **rotation**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1407

Rotation of a component in degrees. If this field is defined, this element will be
absolutely positioned, instead of being laid out by its parent.

#### Memberof

Rescaler

***

### top?

> `optional` **top**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1376

Distance in pixels between this component's top edge and its parent's top edge (including a border).
If this field is defined, then the component will ignore a layout defined by its parent.

#### Memberof

Rescaler

***

### transition?

> `optional` **transition**: `null` \| [`Transition`](Transition.md)

Defined in: composition-openapi/dist/index.d.ts:1414

Defines how this component will behave during a scene update. This will only have an
effect if the previous scene already contained a `Rescaler` component with the same id.

#### Memberof

Rescaler

***

### type

> **type**: `"rescaler"`

Defined in: composition-openapi/dist/index.d.ts:1444

#### Memberof

Rescaler

***

### verticalAlign?

> `optional` **verticalAlign**: `null` \| [`VerticalAlign`](../type-aliases/VerticalAlign.md)

Defined in: composition-openapi/dist/index.d.ts:1349

(**default=`"center"`**) Vertical alignment.

#### Memberof

Rescaler

***

### width?

> `optional` **width**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1359

Width of a component in pixels (without a border). Exact behavior might be different
based on the parent component:
- If the parent component is a layout, check sections "Absolute positioning" and "Static
  positioning" of that component.
- If the parent component is not a layout, then this field is required.

#### Memberof

Rescaler
