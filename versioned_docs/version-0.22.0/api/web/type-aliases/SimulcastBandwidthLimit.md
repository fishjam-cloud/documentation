# Type Alias: SimulcastBandwidthLimit

> **SimulcastBandwidthLimit** = `Map`\<[`Variant`](../enumerations/Variant.md), `BandwidthLimit`\>

Defined in: packages/ts-client/dist/index.d.mts:213

Type describing bandwidth limit for simulcast track.
It is a mapping (encoding => BandwidthLimit).
If encoding isn't present in this mapping, it will be assumed that this particular encoding shouldn't have any bandwidth limit
