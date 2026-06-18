# Type Alias: Override\<T, M\>

> **Override**\<`T`, `M`\> = \{ \[K in keyof T\]: K extends keyof M ? undefined extends T\[K\] ? M\[K\] \| undefined : M\[K\] : T\[K\] \}

Defined in: [js-server-sdk/src/types.ts:27](https://github.com/fishjam-cloud/js-server-sdk/blob/d70af8c6517be3f35a70de3a0c4ad33de743db55/packages/js-server-sdk/src/types.ts#L27)

Replaces the types of fields in `T` whose names appear in `M`, leaving the rest untouched.
Produces a flat object type (single mapped type, no `Omit & {...}` chain) so editor hover
displays the resulting properties directly.

Keys present in `M` but not in `T` are ignored — only fields that already exist on `T`
are overridden, so a shared override map can be reused across multiple source types.

`undefined` is re-added to the override when the original field allowed it, so optional
fields on generated proto types (e.g. `peerId?: string | undefined`) remain assignable
from `undefined` under `exactOptionalPropertyTypes`.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `M` |
