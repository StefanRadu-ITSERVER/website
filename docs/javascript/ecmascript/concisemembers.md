# Concise Members

## Concise Properties

Whenever we need to specify properties for an object, we need to add the name (the identifier) on the left side.

Something like this:

``` js
let car = {
  engine: 1.6,
  manufacturer: 'Opel'
};
```

This `car` object has two properties: `engine` and `manufacturer`.

Fortunately, we are assigning the values directly as part of the initialization statement.

But these values can come from some variables.

``` js
let engine = 1.6;

let car = {
  engine: engine,
  manufacturer: 'Opel'
};
```

In this case, we don't need to specify twice the **property name** because it can be inferred from the **variable name**.

``` js
let engine = 1.6;

let car = {
  engine,
  manufacturer: 'Opel'
};
```

## Concise Methods

We can obviously apply the same technique for a method member.

So, instead of this:

``` js (7, 8, 9)
let engine = 1.6;

let car = {
  engine,
  manufacturer: 'Opel',

  showMileage: function () {
    return 34220;
  }
};
```

We can omit the `function` keyword:

``` js (7, 8, 9)
let engine = 1.6;

let car = {
  engine,
  manufacturer: 'Opel',

  showMileage () {
    return 34220;
  }
};
```
