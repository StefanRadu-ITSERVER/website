# Iteration

Let's create an array with some car manufacturers:

``` javascript
var cars = ['Audi', 'Ferrari', 'Tesla'];
```

We can iterate through this array with `foreach`, `for` and also with `for of`.

## foreach

``` javascript
cars.forEach(car => {
  console.log(car);
});
```

## for

``` javascript
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  console.log(car);
}
```

## for of

``` javascript
for (const car of cars) {
  console.log(car);
}
```

## reversed order

We can also iterate in reverse by using the `for` loop:

``` javascript
for (let i = cars.length - 1; i >= 0; i--) {
  const car = cars[i];
  console.log(car);
}
```
