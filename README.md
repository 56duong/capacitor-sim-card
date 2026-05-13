# capacitor-sim-card

A Capacitor plugin to retrieve SIM card information.

### Latest Version

```bash
npm install https://github.com/56duong/capacitor-sim-card
npx cap sync
```

### Specific Version (v0.0.1)

```bash
npm install https://github.com/56duong/capacitor-sim-card#v0.0.1
npx cap sync
```

## Example Usage

```typescript
import { SimCard, SimCardInfo } from 'capacitor-sim-card';

async function getSimCards() {
  try {
    const result = await SimCard.getSimCards();
    console.log(result);  // [{ number: '+84965661111', carrierName: 'Viettel', isoCountryCode: '452', mobileNetworkCode: '04 }, { number: '+84965669999', carrierName: 'Viettel', isoCountryCode: '452', mobileNetworkCode: '04 }]
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
getSimCards() => Promise<{ simCards: SimCardInfo[]; }>
```

**Returns:** <code>Promise&lt;{ simCards: SimCardInfo[]; }&gt;</code>

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
