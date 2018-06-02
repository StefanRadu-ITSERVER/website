# Features

There are many core features that TypeScript borrows from C#.

## Loops and statements

Same features:
- `for` loop
- `while` loops
- `if else` statement
- `switch` statement
- **ternary operator**
- operators: `+`, `-`, `/`, `%`, `*`, `++`, `--`, `+=`, `-=`, `*=`, `/=`

Different features:
- instead of `foreach` we have `for of`
- for value equality only use `==`, for value and type use `===`
- `var` is scoped to the function, but otherwise (when it's not in a function), it's global.
- `let` is a replacement for C# `var` type (these variables are scoped to the **block** also like `const` ones).

## Object creation

In TypeScript, you don't actually need to set the type of the object because it is inferred.

Example:

``` typescript
var car = {
  manufacturer: 'Lexus',
  year: 2012,
  color: 'white'
};
```

But we can specify the type as well:

``` typescript
var car : Object = {
  manufacturer: 'Lexus',
  year: 2012,
  color: 'white'
};
