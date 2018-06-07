# Map
This is an object that holds key-value pairs (similar to a `Dictionary` if you know C#).

Let's create a `map` object. This will contain fruit types and the associated quantity in kg for a store.

``` javascript
var store = new Map();
```

## Adding items

To add items, we have the `set()` function to which we pass a `key` and a `value` to store:

``` javascript
store.set('peach', 34);
store.set('banana', 14);
store.set('lemon', 10);
store.set('strawberry', 22);
```

::: warning
It is important to say that `map` maintains/keeps the order in which you add items (unlike objects).
:::

## Iteration

Let's display the items as they are to the console:

``` javascript
for (const item of store) {
  console.log(item);
}
```

::: tip const
Notice the usage of `const` here: it creates a new variable with each iteration.

So we don't reassign, we create a new one.
:::

This prints out:

```
Array [ "peach", 34 ]
Array [ "banana", 14 ]
Array [ "lemon", 10 ]
Array [ "strawberry", 22 ]
```

If you want to show only the keys, you can then call the `keys()` function:

``` javascript
for (const item of store.keys()) {
  console.log(item);
}
```

```
peach
banana
lemon
strawberry
```

Also, we have the ability to display only the value by calling the `values()` function:

```
34
14
10
22
```

## Size

We can get the size of a `map` through its `size` attribute:

``` javascript
console.log(store.size); // 4
```

## Get

If you have a `key` and you want to get the item based on that `key` you can use the `get` method:

``` javascript
var lemonQuantity = store.get('lemon');
console.log(lemonQuantity);
```

## Object initializer

You can also do declaration and initialization (to assign a value) in one statement:

``` javascript
var store = new Map([
  ['peach', 34],
  ['banana', 14],
  ['lemon', 10],
  ['strawberry', 22],  
]);
```

And this will behave the same as before:

``` javascript
for (const item of store) {
  console.log(item);
}
```
