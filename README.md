# capacitor-sim-card

A Capacitor plugin to retrieve SIM card information.

## Install

```bash
npm install capacitor-sim-card
npx cap sync
```

## Example Usage

```typescript
import { SimCard, SimCardInfo } from 'capacitor-sim-card';

async function getSimCards() {
  try {
    const result = await SimCard.getSimCards();
    console.log(result);
  } catch (err) {
    console.error('Error getting SIM info:', err);
  }
}
```

## API

<docgen-index>

* [`getSimCards()`](#getsimcards)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSimCards()

```typescript
getSimCards() => Promise<SimCardInfo[]>
```

**Returns:** <code>Promise&lt;SimCardInfo[]&gt;</code>

--------------------


### Interfaces


#### SimCardInfo

| Prop                    | Type                 | Description                                                                                       |
| ----------------------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| **`number`**            | <code>string</code>  | Android only: Phone number.                                                                       |
| **`allowsVOIP`**        | <code>boolean</code> | iOS only: If this carrier allows VOIP calls to be made on its network.                            |
| **`carrierName`**       | <code>string</code>  | The name of the cellular service provider.                                                        |
| **`isoCountryCode`**    | <code>string</code>  | Country code for the cellular service provider, represented as an ISO 3166-1 country code string. |
| **`mobileCountryCode`** | <code>string</code>  | Mobile country code (MCC) for the cellular service provider, in its numeric representation.       |
| **`mobileNetworkCode`** | <code>string</code>  | Mobile network code (MNC) for the cellular service provider, in its numeric representation.       |

</docgen-api>
