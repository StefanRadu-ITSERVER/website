# Default Parameters

Let's understand **default parameters**, shall we? :grin:

We can craete a function that writes a greeting to the console:

``` js
function writeMessage(name) {
  console.log(`Hi, ${name}!`);
}
```

Let's call it with a name:

``` js
let name = "Daniel";
writeMessage(name);
```

And it prints out:

```
Hi, Daniel!
```

Cool :D

But what happens if the `name` variable doesn't have a value?

``` js
let name;
writeMessage(name);
```

This prints:

```
Hi, undefined!
```

Well, this is not good :(

Maybe we want to say: "Hi, there!" if there is no name.

We can do this with **default parameters**:

``` js
function writeMessage(name = 'there') {
  console.log(`Hi, ${name}!`);
}
```

Now, it prints:

```
Hi, there!
```

Also, we can call the function with no parameter and the **default** value is used again.

## OR operator

Prior to these, we would use the `||` OR operator:

``` js
function writeMessage(name) {
  name = name || 'there';
  console.log(`Hi, ${name}!`);
}
```

::: tip Naming
This operator is called **default paramter idiom**.
:::

Now, the **default paramters** are more elegant and descriptive. :D
