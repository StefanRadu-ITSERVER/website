# Dictionary

Let's create a **dictionary** in TypeScript.

We have a shop which has an `inventory` of fruits. For each fruit type, we have a quantity in kilograms.

``` typescript
 let inventory: { [index: string]: number } = {
  apples: 34.5,
  grapes: 45.3,
  melons: 100
};
```

## Index signatures

This part `{ [index: string]: number }` represents the **index signature** which we need to define explicitelly if we want to get the item (in our case the quantity). 

We used `string` because our index is a **string literal**.

You can read more on [GitHub](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#394-index-signatures).


Now, we can loop over using `for in` loop to get the key and the item:

``` typescript
for (const key in inventory) {
  if (inventory.hasOwnProperty(key)) {
    const item = inventory[key];
    console.log(`${item}kg of ${key}`);
  }
}
```

This is the result:

```
34.5kg of apples
45.3kg of grapes
100kg of melons
```

The `hasOwnProperty` is used to check/make sure that the key is a property of the dictionary object.
