# Intersection

Let's say we have two arrays:

``` javascript
var cars1 = ['Ferrari', 'Skoda', 'Seat', 'Honda'];
var cars2 = ['Ferrari', 'Mazda', 'Jaguar', 'Honda'];
```

And we want to intersect them (to get the matching items – those which are the same).

This is the short approach which I recommend:

``` javascript
var result = cars1
    .filter(car => cars2.indexOf(car) !== -1);

console.log(result);
```

This is the procedural way of doing it:

``` javascript
var intersetion = [];

for (let i = 0; i < cars1.length; i++) {
  for (let j = 0; j < cars2.length; j++) {
    if (cars1[i] === cars2[j]) {
      intersetion.push(cars1[i]);
    }
  }
}

console.log(intersetion);
```

