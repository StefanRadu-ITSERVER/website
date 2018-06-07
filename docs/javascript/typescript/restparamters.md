# Rest parameters

Let's look at how to implement rest parameters. :eyes:

If you are familiar with C#, then it is similar to `params`.

We are going to create a function that adds numbers together and we are able to pass as many numbers as we want.

``` ts
function addNumbers(...numbers: number[]) {
  return numbers.reduce((accumulator: number, current: number) => {
    return accumulator += current;
  })
}
```

This is called the **rest parameter** and gathers all the passed parameters into one array. We have `...` ellipsis (these three dots).

Then we use the `reduce` function to calculate the sum.

Let's call it:

``` ts
let result = addNumbers(2, 34, 53, 32, 3, 54);
console.log(result); // 178
```

So, these parameters are useful when you don't know how many you want to pass to a function. Regardless of their number, the **rest parameter** gathers all of them together.

If you are not familiar with the `reduce` function, then this is the procedural approach:

``` ts
function addNumbers(...numbers: number[]) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
```
