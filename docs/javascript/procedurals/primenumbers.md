# Prime numbers

A number is **prime** if it can be divided ONLY by `1` and by itself.

Let's create a function that checks if a number is prime:

``` js
function isPrime(number){
  let isPrime = true;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
```

If we find at least one number between `2` and it's half, then the number is not prime. So, `isPrime` gets false and that's it – we don't continue. Game over with that fella :joy:

Let's call the function with a prime number and see what we get:

``` js
var number = 53;
var result = isPrime(number);
console.log(result); // true
```

We can also create an array to test multiple numbers with a `foreach` loop:

``` js
var numbers = [32, 2, 43, 423, 0, 2];

numbers.forEach(number => {
  var result = isPrime(number);
  console.log(number + " is prime: " + result);
});
```

This is a simple approach that works :D

But if you want to get crazy about it (being more efficient, faster etc.), you can :sweat_smile:

This is the new function:

``` js
function isPrime(number) {
var firstPrimes = [0, 1, 2, 3];
if (firstPrimes.includes(number)) {
  return true;
}

if (number % 2 === 0 || number % 3 === 0) {
  return false;
}

let isPrime = true;
for (let i = 5; i <= number / 2; i += 2) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

return isPrime;
}
```

:scream:
