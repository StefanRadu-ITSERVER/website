## Creating a function

We need to use the `function` keyword:

``` js
function printSomething(){
  console.log('Today is a great day, isn\'t it?');
};
```

## Calling a function

We can call a function (execute the code inside of it) by using its name:

``` js
printSomething();
```

## Assignment

We can also assign functions to variables:

``` js
const message = function printSomething(){
  console.log('Today is a great day, isn\'t it?');
};
```

Now, we can call these variables like so:

``` js
message();
```


## Hoisting

Can we call a function before we declare it? Well, yes :D

The following code works:

``` js
var result = addition(4, 5);
console.log(result);

function addition(a, b){
  return a + b;
}
```

Why? Because functions in JavaScript are **hoisted** – all of them are moved at the top.

This won't work if you assign this function to a variable and try to call it before like so:

``` js
var result = add(4, 5);
console.log(result);

const add = function addition(a, b){
  return a + b;
}
```


## Return values

The idea of writing a function is to give it some variables (input). The function operates on those values and spits out some value (output).

This is done with the `return` keyword.

::: tip
Compared to C#, you don't define the **return type** in the signature. 

You simply use the `return` keyword.
:::

## Parameters

To any function, we can pass some variables to operate on them.

``` js
function addition(a, b){
  return a + b;
}

var result = addition(4, 5);
console.log(result);
```

Although, these are called generally parameters there is still a distinction.

In our case:
- `a` and `b` are parameters (we list parameters when we write/declare a function)
- `4` and `5` are arguments (we pass arguments when we call a function)


## Purpose

Functions give us the ability to break down a big problem into small pieces which become easier for us to write.

These make the code cleaner, reusable and modular.

So, the entire logic/algoritm that is neccesary to solve a problem is split across these functions.



