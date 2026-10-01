# Interface: Text

Defined in: composition-openapi/dist/index.d.ts:1566

## Export

Text

## Properties

### align?

> `optional` **align**: `null` \| [`HorizontalAlign`](../type-aliases/HorizontalAlign.md)

Defined in: composition-openapi/dist/index.d.ts:1650

(**default=`"left"`**) Text align.

#### Memberof

Text

***

### backgroundColor?

> `optional` **backgroundColor**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1631

(**default=`"#00000000"`**) Background color in `#RRGGBBAA` format.

#### Memberof

Text

***

### color?

> `optional` **color**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1625

(**default=`"#FFFFFFFF"`**) Font color in `#RRGGBBAA` format.

#### Memberof

Text

***

### fontFamily?

> `optional` **fontFamily**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1638

(**default=`"Verdana"`**) Font family. Provide [family-name](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#family-name-value)
for a specific font. "generic-family" values like e.g. "sans-serif" will not work.

#### Memberof

Text

***

### fontSize

> **fontSize**: `number`

Defined in: composition-openapi/dist/index.d.ts:1613

Font size in pixels.

#### Memberof

Text

***

### height?

> `optional` **height**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1593

Height of a texture that text will be rendered on. If not provided, the resulting texture
will be sized based on the defined text but limited to `max_height` value.
It's an error to provide `height` if `width` is not defined.

#### Memberof

Text

***

### id?

> `optional` **id**: `null` \| `string`

Defined in: composition-openapi/dist/index.d.ts:1572

Id of a component.

#### Memberof

Text

***

### lineHeight?

> `optional` **lineHeight**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1619

Distance between lines in pixels. Defaults to the value of the `font_size` property.

#### Memberof

Text

***

### maxHeight?

> `optional` **maxHeight**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1607

(**default=`4320`**) Maximal `height`. Limits the height of the texture that the text will be rendered on.
Value is ignored if height is defined.

#### Memberof

Text

***

### maxWidth?

> `optional` **maxWidth**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1600

(**default=`7682`**) Maximal `width`. Limits the width of the texture that the text will be rendered on.
Value is ignored if `width` is defined.

#### Memberof

Text

***

### style?

> `optional` **style**: `null` \| [`TextStyle`](../type-aliases/TextStyle.md)

Defined in: composition-openapi/dist/index.d.ts:1644

(**default=`"normal"`**) Font style. The selected font needs to support the specified style.

#### Memberof

Text

***

### text

> **text**: `string`

Defined in: composition-openapi/dist/index.d.ts:1578

Text that will be rendered.

#### Memberof

Text

***

### type

> **type**: `"text"`

Defined in: composition-openapi/dist/index.d.ts:1668

#### Memberof

Text

***

### weight?

> `optional` **weight**: `null` \| [`TextWeight`](../type-aliases/TextWeight.md)

Defined in: composition-openapi/dist/index.d.ts:1662

(**default=`"normal"`**) Font weight. The selected font needs to support the specified weight.

#### Memberof

Text

***

### width?

> `optional` **width**: `null` \| `number`

Defined in: composition-openapi/dist/index.d.ts:1585

Width of a texture that text will be rendered on. If not provided, the resulting texture
will be sized based on the defined text but limited to `max_width` value.

#### Memberof

Text

***

### wrap?

> `optional` **wrap**: `null` \| [`TextWrapMode`](../type-aliases/TextWrapMode.md)

Defined in: composition-openapi/dist/index.d.ts:1656

(**default=`"none"`**) Text wrapping options.

#### Memberof

Text
