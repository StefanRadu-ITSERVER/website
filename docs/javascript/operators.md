# Equality

Let's look at equality.

There are two operators for this:
- `==` which checks the **values** only
- `===` which checks both the **values** and **types**

``` ts
let nr = 1;
console.log(nr == 1);   // true
console.log(nr == '1')  // true
console.log(nr === 1);  // true
console.log(nr === '1') // false
```
