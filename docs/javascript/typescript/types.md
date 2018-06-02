# Types

As you may know already, JavaScript is a dynamic language.

We can leverage this characteristic of the language in TypeScript by assigning different different types to a variable:

``` typescript
let item: string | Object;

item = 'curtain';

item = {
  name: 'curtain',
  type: 'accessory'
}
```

And this works without problems.

If we specify only `string`, then we will have error when we try to assign the object value.


