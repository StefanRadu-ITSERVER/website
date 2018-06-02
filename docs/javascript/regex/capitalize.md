## Regex: capitalize

Let's create a function which capitalizes each word in a sentence using **Regex**.

The **Regex** expression that we are going to use is this:

```
/\w\S*/g
```

Let's analyse this expression:
- \w – matches any word (lower and upper letters, numbers, underscore)
- \S* – matches any **non-whitespace** character
  - * – Quantifier: matches between zero and unlimited times
- /g – global (all matches – don't return after the first match)

We can visit this website and paste the **Regex expression** there to read the explanation:

[https://regex101.com](https://regex101.com)

Now, let's create a function to use this expression.

``` js
function capitalizeEachWord (text) {
  return text.replace(/\w\S*/g, word => {
    var firstLetter = word.charAt(0).toUpperCase();
    var rest = word.substr(1).toLowerCase();
    return firstLetter + rest;
  })
};
```

Then, we can call it with some random text:

``` js
var text = "i am going to have brunch in the city";
var capitalizedText = capitalizeEachWord(text);
console.log(capitalizedText);
```

And we get the text capitalized:

```
I Am Going To Have Brunch In The City
```
