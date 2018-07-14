# Composition

This is a fairly easy concept to grasp. 

When you think about composition, you should think about how to **compose** (combine) functions.

It is difficult to explain in an abstract way, but the idea is to get the output of one function call and use it as the input.

## Common example

Let's see an example.

We have a `name` variable and we want to remove its whitespaces and capitalize it.

So, we need two functions:
- to remove whitespaces
- to capitalize the value

``` js
function removeWhitespace(value) {
  return value.replace(/\s/g,'');
};

function capitalize(value) {
  return value.toUpperCase();
};
```

Now, let's call the two functions by saving the results in separate variables (notice also the specific naming of variables - this is particulary important when writing functional programming):

``` js
let name = ' dani el  ';
let trimmedName = removeWhitespace(name);
let capitalizedTrimmedName = capitalize(trimmedName);
console.log(capitalizedTrimmedName); // DANIEL
```

## Composition

In order to implement composition, we need to create an extra function which does both things and returns the result:

``` js
function removeWhitespacesAndCapitalize(value) {
  return capitalize(removeWhitespace(value))
};
```

And now, we can call the **composed** function and get the result:

``` js
let name = ' dani el  ';
let capitalizedTrimmedName = trimAndCapitalize(trimmedName);
console.log(capitalizedTrimmedName); // DANIEL
```

The result is the same, but now, instead of us figuring out which functions to combine to get the desired result, we created an extra function which does the **composition** for us.

Also, we don't need to store the intermiadiary results in other variables.

