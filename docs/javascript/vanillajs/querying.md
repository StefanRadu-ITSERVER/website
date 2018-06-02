# QuerySelectors

Let's see how we can target HTML elements with JavaScript.

I am going to create a simple `div` with an ID `main`. Inside, I will put a `h3` and a `p`:

``` html
<div id="main">
  <h3>Awesome</h3>
  <p>
    The most incredible thing ever!
  </p>
</div>
```

Now, we can use `document.QuerySelector` to select one of the elements. Let's say the heading `h3`:

``` js
var heading = document.querySelector("h3");
console.log(heading.innerText); // Awesome
```

And we can see the actual value of the `h3` heading. :D

Now, let's try to add another `h3` heading and we can put it inside a `div`:

``` html
<div id="main">
  <h3>Awesome</h3>
  <p>
    The most incredible thing ever!
  </p>

  <div id="content">
    <h3>Cool</h3>
  </div>
</div>
```

If we try to get the value of `h3` as before, we are still going to get the `Awesome` from the first one:

``` js
var heading = document.querySelector("h3");
console.log(heading.innerText); // Awesome
```

If we need to target the `h3` that we have just created, we need to be more specific with our **selector**.

::: tip CSS Selectors
The argument that we have passed here: `document.querySelector("h3");` is an actual CSS selector.
:::

So, we can target that `h3` by specifying it's `div` parent:

``` js
var heading = document.querySelector("#content h3");
console.log(heading.innerText); // Cool
```

::: warning
Notice the usage of `#` before the `content` (this is an ID).

If it was a class, you would use `.`. :)
:::

We can also be more general and get all the `h3` headings by using `document.querySelectorAll()`.

This time, it returns an array with all of them and we need a foreach to display them:

``` js
var headings = document.querySelectorAll("h3");

headings.forEach(heading => {
  console.log(heading.innerText);
});
```

This prints:

```
Awesome
Cool
```

The result is an array an we can use all the operations speific to arrays (foreach, indexes etc.). Also, all of them represent the actual HTML element, so we can retrieve any attribute that they have.

::: warning getElementBy
But what about `getElementById`, `getElementByClassName` or `getElementByTagName`?

Well, these are the old way of targetting HTML elements. Now, you can simply use **CSS Selectors** and you are good to go. :sweat_smile:

These help tremendously to reach down into the **DOM** to get specific nodes (node > node > node > ...).
:::

Now, before we end this, let's see a small example with targetting an element by its `class`.

As I said, `#` for IDs, `.` for classes.

Let's add a class to the paragraph:

``` html
<p class="center">
  The most incredible thing ever!
</p>
```

We can target this paragraph like so:

``` js
var paragraph = document.querySelector('.center');
console.log(paragraph.innerText);
```

Don't forget:
If there are multiple, `querySelector` gets the first occurence. If your indent is to get all, then use `querySelectorAll`. :bowtie:

An extra thing: you can use multiple CSS selectors at once:
``` js
var elements = document.querySelectorAll('#main p, #content h3');
elements.forEach(element => {
  console.log(element.innerText);
});
```
