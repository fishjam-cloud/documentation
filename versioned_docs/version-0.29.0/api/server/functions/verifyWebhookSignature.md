# Function: verifyWebhookSignature()

> **verifyWebhookSignature**(`body`, `signature`, `secret`): `boolean`

Defined in: [js-server-sdk/src/webhook.ts:61](https://github.com/fishjam-cloud/js-server-sdk/blob/7a2c47c51d7cc50c2a4c18fa0c327279e0b2550c/packages/js-server-sdk/src/webhook.ts#L61)

Verify the signature of a raw Fishjam webhook request.

Fishjam signs each webhook delivery with the room's signing secret and sends
the result in the `x-fishjam-signature-256` header as
`sha256=<lowercase hex HMAC-SHA256 of the raw body>`. Pass the raw,
not-yet-decoded request body, the header value, and your secret; the comparison
is constant-time (signatures of the wrong length are rejected early, which
leaks only the expected signature length — public knowledge for SHA-256).
Verify before calling [decodeServerNotifications](decodeServerNotifications.md).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | `ArrayBuffer` \| `Uint8Array`\<`ArrayBufferLike`\> |
| `signature` | `string` |
| `secret` | `string` |

## Returns

`boolean`

## Example

```ts
import { verifyWebhookSignature, decodeServerNotifications } from '@fishjam-cloud/js-server-sdk';

declare const body: Uint8Array;
declare const signatureHeader: string;
// ---cut---
if (!verifyWebhookSignature(body, signatureHeader, process.env.WEBHOOK_SECRET!)) {
  throw new Error('Invalid webhook signature');
}
const notifications = decodeServerNotifications(body);
```
