# Divisors

Let's get all the divisors for a number:

``` js
function getDivisors(number) {
  let divisors = [1];
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  divisors.push(number);
  return divisors;
}

var numbers = [32, 2, 43, 423, 7, 68];

numbers.forEach(number => {
  var divisors = getDivisors(number);
  console.log("Divisors for " + number + " are: " + divisors.join());
});
```
