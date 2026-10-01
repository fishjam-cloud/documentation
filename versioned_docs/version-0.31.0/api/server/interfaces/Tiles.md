# Interface: Tiles

Defined in: composition-openapi/dist/index.d.ts:1703

## Export

Tiles

## Properties

### backgroundColor?

> `optional` **backgroundColor**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1741

(**default=`"#00000000"`**) Background color in a `"#RRGGBBAA"` format.

#### Memberof

Tiles

***

### children?

> `optional` **children**: `null` \| [`Component`](../type-aliases/Component.md)[]

Defined in: composition-openapi/dist/index.d.ts:1715

List of component's children.

#### Memberof

Tiles

***

### height?

> `optional` **height**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1735

Height of a component in pixels. Exact behavior might be different based on the parent
component:
- If the parent component is a layout, check sections "Absolute positioning" and "Static
  positioning" of that component.
- If the parent component is not a layout, then this field is required.

#### Memberof

Tiles

***

### horizontalAlign?

> `optional` **horizontalAlign**: `null` \| [`HorizontalAlign`](../type-aliases/HorizontalAlign.md)

Defined in: composition-openapi/dist/index.d.ts:1765

(**default=`"center"`**) Horizontal alignment of tiles.

#### Memberof

Tiles

***

### id?

> `optional` **id**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1709

Id of a component.

#### Memberof

Tiles

***

### margin?

> `optional` **margin**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1753

(**default=`0`**) Margin of each tile in pixels.

#### Memberof

Tiles

***

### padding?

> `optional` **padding**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1759

(**default=`0`**) Padding on each tile in pixels.

#### Memberof

Tiles

***

### tileAspectRatio?

> `optional` **tileAspectRatio**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1747

(**default=`"16:9"`**) Aspect ratio of a tile in `"W:H"` format, where W and H are integers.

#### Memberof

Tiles

***

### transition?

> `optional` **transition**: `null` \| [`Transition`](Transition.md)

Defined in: composition-openapi/dist/index.d.ts:1778

Defines how this component will behave during a scene update. This will only have an
effect if the previous scene already contained a `Tiles` component with the same id.

#### Memberof

Tiles

***

### type

> **type**: `"tiles"`

Defined in: composition-openapi/dist/index.d.ts:1784

#### Memberof

Tiles

***

### verticalAlign?

> `optional` **verticalAlign**: `null` \| [`VerticalAlign`](../type-aliases/VerticalAlign.md)

Defined in: composition-openapi/dist/index.d.ts:1771

(**default=`"center"`**) Vertical alignment of tiles.

#### Memberof

Tiles

***

### width?

> `optional` **width**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1725

Width of a component in pixels. Exact behavior might be different based on the parent
component:
- If the parent component is a layout, check sections "Absolute positioning" and "Static
  positioning" of that component.
- If the parent component is not a layout, then this field is required.

#### Memberof

Tiles
