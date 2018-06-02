# Array methods

Let's create an array:

``` javascript
var fruits = ['peach', 'banana', 'lemon', 'strawberry'];
```

You see that we use square brackets `[]` to create an array.

## Length

We can get how many items are in an array with the `length` attribute:

``` javascript
console.log(fruits.length); // 4
```

## Getting items

Arrays are ordered which means that the each item is stored in a numbered position/slot.

You can get any value from an array through an index:

``` javascript
var firstItem = fruits[0];
console.log(firstItem); // peach
```

::: warning
If you pass an index that is outside of the bounds of the array, then you will get an `undefined` value.
:::

## Adding items

We can add items by calling the `push()` function with new value(s):

``` javascript
fruits.push('apple');
fruits.push('blackberry', 'mango');
```

## Removing items

We can delete/remove the **last item** from an array by calling the `pop()` function:

``` javascript
fruits.pop();
```

## Updating items

You can change the value of an item by using the **index**:

``` javascript
fruits[2] = 'pineapple';
```

## Any type

You can add items of different types in an array:

``` javascript
var stuff = [32, 'bike', false, [12, 32]];
```

::: tip
Normally, you group things together that are of the same type because you want to manipulate items in a specific way based on their type.
:::
