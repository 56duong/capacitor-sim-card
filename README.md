# capacitor-sim-card

A Capacitor plugin to retrieve SIM card information.

## Install

```bash
npm install capacitor-sim-card
npx cap sync
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
getSimCards() => Promise<GetSimCards>
```

**Returns:** <code>Promise&lt;<a href="#getsimcards">GetSimCards</a>&gt;</code>

--------------------


### Interfaces


#### GetSimCards

| Prop           | Type                       |
| -------------- | -------------------------- |
| **`simCards`** | <code>SimCardInfo[]</code> |


#### SimCardInfo

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`number`**            | <code>string</code> |
| **`carrierName`**       | <code>string</code> |
| **`isoCountryCode`**    | <code>string</code> |
| **`mobileCountryCode`** | <code>string</code> |
| **`mobileNetworkCode`** | <code>string</code> |

</docgen-api>
