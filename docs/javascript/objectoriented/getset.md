# Getters and Setters

## get
Let's see how to create a `get` in JavaScript :wink:

I am going to create a `Car` class with two properties:
- manufacturer
- productionYear

``` js
class Car {
  constructor(manufacturer, productionYear) {
    this.manufacturer = manufacturer;
    this.productionYear = productionYear;
  }
}
```

Now, I would like to know the age of this car (in years).

I can make a `get` for the `age`:

``` js
get age() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  return currentYear - this.productionYear;
}
```

Let's make a car :car: and get it's age:

``` js
var ferrari = new Car('Ferrari', 2015);
console.log(`${ferrari.age} years`);
```

::: tip get
So, a **getter** is a method that "gets" / returns a value.
:::

And it makes sense to have `age` as a **get property**: we need to perform some computations (calculations) based on other properties (in our case `productionYear`).

So, it's not a static property, but a dynamic one.

### What about methods?

Now, this could have been a normal method:

``` js
getAge() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  return currentYear - this.productionYear;
}
```

::: warning Remember
In JS classes, you don't need the `function` keyword for methods.
:::

And then we could call it:

``` js
var ferrari = new Car("Ferrari", 2015);
var ferrariAge = ferrari.getAge();
console.log(`${ferrariAge} years`);
```

But you can see that we need to use the `()` parantheses because it's a method call and to make it more descriptive, I chose to add an extra variable to hold the age.

With **getters**, the code looks better, it's more descriptive and we don't need the parantheses treating a computational property as a regular one. 

## set

In contrast to `get` which returns a value, `set` assigns a value.

We are going to add a new requirement: the year must be after `1900`.

Right now, we can change the year how we want:

``` js
var ferrari = new Car('Ferrari', 2015);
ferrari.productionYear = 12;
console.log(`${ferrari.age} years`);
```

And we get:

```
1518 years
```

A little bit too old, right? :grimacing:

This is where we can restrict what value we get **set / assign** to the `productionYear` property by creating a **setter*:

``` js
set productionYear(value) {
  if (value > 1900) {
    this._productionYear = value;
  }
}
```

Also, we need to add the **getter** for this property:

``` js
get productionYear() {
  return this._productionYear;
}
```

Now, whenever we try to assign a value to the `productionYear` property, this setter is called and we allow years that are after `1900`.

``` js
var ferrari = new Car('Ferrari', 2015);
ferrari.productionYear = 12;
console.log(`${ferrari.age} years`); // 3 years
```

The `productionYear` remains unchanged. So, we have successfully managed to restrict what values we can assign to this property.

::: tip
As with `get`, we don't need parantheses. This behaves like a property and we can directly assign a value.
:::

Also, we can `throw` an exception to tell the consumer of this class what happens:

``` js
set productionYear(value) {
  if (value < 1900) {
    throw 'Year must be after 1900';
  }
  this._productionYear = value;
}
```

Now, if we try to assign `12`, it prints an error:

```
uncaught exception: Year must be after 1900
```

::: warning
Notice that I changed the sign from `>` to `<`. 

This pattern is not required, but what I personally like is to check first for errors and then, if everything is find, to assign the value.
:::

We can handle this, by using a `try catch` block:

``` js
try {
  var ferrari = new Car('Ferrari', 2015);
  ferrari.productionYear = 12;
} catch (error) {
  console.log(error);
}

console.log(`${ferrari.age} years`);
```

::: tip
We use `try catch` around blocks that are dangerous and risky (those which can generate errors).
:::

In this way, we are unable to change the value of the `productionYear` until the value is right.

Check the code in this [CodePen](https://codepen.io/danielsimi/pen/RyEYYO).
