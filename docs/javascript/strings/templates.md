Prior to **template strings**, we would use the `+` operator for concatenation.

Let's see the before and after :wink:

``` js
var name = "Daniel";
var country = "Romania";

var text = "This is " + name + " from " + country;
console.log(text);
```

And now, we can rewrite this with **template strings**:

``` js
var name = "Daniel";
var country = "Romania";

var text = `This is ${name} from ${country}`;
console.log(text);
```

::: warning
We need to use backticks ` `` ` (below the `Esc` key).
:::

You can see that it's more intuitive to write using **template strings**: you can see where to put whitespaces, what are the variables, where to place them in the string etc.

::: tip  Pro Tip here
Still, you can use the `+` operator to concatenate strings.

The new features that appear are for our help, but we aren't constrained to use them as with any new feature. 

Take your time, get familiar and comfortable with it and then incorporate it in your workflow. :grinning:
:::

## Multiline strings

Another addition that the template strings have brought is the ability to add new lines write inside the strings without the use of `\n`.

``` js
var text = "Hi there, \nAre you fine?";
console.log(text);
```

``` js
var text = `Hi there, 
Are you fine?`;
console.log(text);
```

These two print the same thing. 

You could still use `\n` in **string templates** if you want.

Also, any identation or extra spaces that appear in the string are displayed.

Pretty cool! :sunglasses:

We can also name this: **substitution parameters with backticks**.

