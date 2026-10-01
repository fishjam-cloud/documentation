# Interface: View

Defined in: composition-openapi/dist/index.d.ts:1872

## Export

View

## Properties

### backgroundColor?

> `optional` **backgroundColor**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1967

(**default=`"#00000000"`**) Background color in a `"#RRGGBBAA"` format.

#### Memberof

View

***

### borderColor?

> `optional` **borderColor**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1985

(**default=`"#00000000"`**) Border color in a `"#RRGGBBAA"` format.

#### Memberof

View

***

### borderRadius?

> `optional` **borderRadius**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1973

(**default=`0.0`**) Radius of a rounded corner.

#### Memberof

View

***

### borderWidth?

> `optional` **borderWidth**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1979

(**default=`0.0`**) Border width.

#### Memberof

View

***

### bottom?

> `optional` **bottom**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1933

Distance in pixels between the bottom edge of this component and the bottom edge of its
parent (including a border). If this field is defined, this element will be absolutely
positioned, instead of being laid out by its parent.

#### Memberof

View

***

### boxShadow?

> `optional` **boxShadow**: `null` \| [`BoxShadow`](BoxShadow.md)[]

Defined in: composition-openapi/dist/index.d.ts:1991

List of box shadows.

#### Memberof

View

***

### children?

> `optional` **children**: `null` \| [`Component`](../type-aliases/Component.md)[]

Defined in: composition-openapi/dist/index.d.ts:1884

List of component's children.

#### Memberof

View

***

### direction?

> `optional` **direction**: `null` \| [`ViewDirection`](../type-aliases/ViewDirection.md)

Defined in: composition-openapi/dist/index.d.ts:1910

Direction defines how static children are positioned inside a View component.

#### Memberof

View

***

### height?

> `optional` **height**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1904

Height of a component in pixels (without a border). Exact behavior might be different
based on the parent component:
- If the parent component is a layout, check sections "Absolute positioning" and "Static
  positioning" of that component.
- If the parent component is not a layout, then this field is required.

#### Memberof

View

***

### id?

> `optional` **id**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1878

Id of a component.

#### Memberof

View

***

### left?

> `optional` **left**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1925

Distance in pixels between this component's left edge and its parent's left edge (including a border).
If this field is defined, this element will be absolutely positioned, instead of being
laid out by its parent.

#### Memberof

View

***

### overflow?

> `optional` **overflow**: `null` \| [`Overflow`](../type-aliases/Overflow.md)

Defined in: composition-openapi/dist/index.d.ts:1961

(**default=`"hidden"`**) Controls what happens to content that is too big to fit into an area.

#### Memberof

View

***

### padding?

> `optional` **padding**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1997

(**default=`0.0`**) Padding for all sides of the component.

#### Memberof

View

***

### paddingBottom?

> `optional` **paddingBottom**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:2027

(**default=`0.0`**) Padding on bottom side in pixels.

#### Memberof

View

***

### paddingHorizontal?

> `optional` **paddingHorizontal**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:2009

(**default=`0.0`**) Padding for the left and right of the component.

#### Memberof

View

***

### paddingLeft?

> `optional` **paddingLeft**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:2033

(**default=`0.0`**) Padding on left side in pixels.

#### Memberof

View

***

### paddingRight?

> `optional` **paddingRight**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:2021

(**default=`0.0`**) Padding on right side in pixels.

#### Memberof

View

***

### paddingTop?

> `optional` **paddingTop**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:2015

(**default=`0.0`**) Padding on top side in pixels.

#### Memberof

View

***

### paddingVertical?

> `optional` **paddingVertical**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:2003

(**default=`0.0`**) Padding for the top and bottom of the component.

#### Memberof

View

***

### right?

> `optional` **right**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1941

Distance in pixels between this component's right edge and its parent's right edge.
If this field is defined, this element will be absolutely positioned, instead of being
laid out by its parent.

#### Memberof

View

***

### rotation?

> `optional` **rotation**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1948

Rotation of a component in degrees. If this field is defined, this element will be
absolutely positioned, instead of being laid out by its parent.

#### Memberof

View

***

### top?

> `optional` **top**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1917

Distance in pixels between this component's top edge and its parent's top edge (including a border).
If this field is defined, then the component will ignore a layout defined by its parent.

#### Memberof

View

***

### transition?

> `optional` **transition**: `null` \| [`Transition`](Transition.md)

Defined in: composition-openapi/dist/index.d.ts:1955

Defines how this component will behave during a scene update. This will only have an
effect if the previous scene already contained a `View` component with the same id.

#### Memberof

View

***

### type

> **type**: `"view"`

Defined in: composition-openapi/dist/index.d.ts:2039

#### Memberof

View

***

### width?

> `optional` **width**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1894

Width of a component in pixels (without a border). Exact behavior might be different
based on the parent component:
- If the parent component is a layout, check sections "Absolute positioning" and "Static
  positioning" of that component.
- If the parent component is not a layout, then this field is required.

#### Memberof

View
