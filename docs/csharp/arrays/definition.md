# Definition 

Let's see why we need to use arrays in C# :grin:

<youtube :src="'i-jS6EEHmiQ'"/>

## What are arrays?
Arrays are actually objects :thinking:.

## Why using arays?
You can use arrays to store same-type variables.

### Example

Imagine you have `3` numbers and you want to calculate their **sum**. Well, we could declare these numbers as individual variables and then create another one to hold the sum:

``` csharp
var nr1 = 3;
var nr2 = 5;
var nr3 = 4;

var sum = nr1 + nr2 + nr3;
Console.WriteLine(sum);
```

This works well, but what happens if we have `10` numbers? What about something crazy like `75268` numbers?
Imagine how many variables you need to write! :astonished:

![Scared dog](https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy-downsized-large.gif)

[Giphy](https://giphy.com/gifs/mrw-boy-51Uiuy5QBZNkoF3b2Z)

This is where `arrays` kick in. Let's rewrite the program with an array instead:

``` csharp
var numbers = new[] { 3, 5, 4 };

var sum = numbers.Sum();
Console.WriteLine(sum);
```

## Conclusion

Awesome! And now, we don't have to worry about declaring those `75265` numbers as individual variables anymore. :relieved:

::: tip Summary
So, arrays are useful when you deal with a whole **bunch** of variables of the same type which need some sort of manipulation.
:::
