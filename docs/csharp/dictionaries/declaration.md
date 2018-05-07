---
title: C# Dictionaries
---

# Dictionaries in C#

I am going to create a store variable of type `Dictionary` which holds the kilograms of fruit that we have in store for each fruit type.

## Declaration:
We can create a `Dictionary` like so:

``` csharp
var store = new Dictionary<string, double>();
```

## Adding items

Then, we can start adding new items to the `Dictionary` (remember, you need to provide first the key, and then the value):

``` csharp
store.Add("peach", 4.5);
store.Add("lemon", 10);
store.Add("grape", 14.8);
```

::: tip
The `Key` is first, the `Value` is second.
:::

## Object initializers

But we can do these steps at once with **object initializers**:

``` csharp
var store = new Dictionary<string, double>
{
    { "peach", 4.5 },
    { "lemon", 10 },
    { "grape", 14.8 }
};
```

## Index initializers

Also, there is another approach of initializing a `Dictionary` in C#, and that is with the **index initializers**:

``` csharp
var store = new Dictionary<string, double>
{
    ["peach"] = 4.5 ,
    ["lemon"] = 10,
    ["grape"] = 14.8
};
```

## Looping

Let's try to print out the kilograms for each fruit we have to the console by using the `foreach` loop:

``` csharp
foreach (var item in dictionary)
{
    Console.WriteLine($"{item.Value} kilograms of {item.Key}s");
}
```

And we get this result:

```
4.5 kilograms of peachs
10 kilograms of lemons
14.8 kilograms of grapes
```

::: tip
The actual type of the `item` variable from the previous `foreach` loop is: `KeyValuePair` – which represents exactly that it says: a pair of a `Key` and a `Value`. So, for us the `Key` is the fruit name (`lemon` :lemon: for example), and the value is the quantity (`4.5` kilograms of lemons :lemon:).
:::

## Unic keys

Now, let's try adding more grapes :grapes: to our store. Maybe we might have forgotten that we just initialized our Dictionary with grapes already and we could do something like this:

``` csharp
store.Add("grape", 7);
```

::: danger ArgumentException
And we get an exception: System.ArgumentException: 'An item with the same key has already been added.'
:::

So, the keys must be unic (if you thing about it, this is why I didn't choose to use quantity as my key because we might have similar quantities for same fruit types).



The best practice is to check whether or not the `Key` exists in the `Dictionary` before trying to add it. Let's see how that is done.

First, we an keep the line from before, but we need to check if the key is not present in hte `Dictionary` with the `ContainsKey` method:

``` csharp
if (!store.ContainsKey("grape"))
{
    store["grape"] = 7;
}
```

Then, on the `else` branch we can increase the quantity of grapes :grapes: because we know that we have them in the store:

``` csharp
else
{
    var value = store["grape"];
    value += 7;
    store["grape"] = value;
}
```

And this works :D Now, we have `21.8` kg of grapes.

### Refactoring

Let's refactor because we have use the string `grape` way too many times and `7` for quantity as well:

``` csharp
var grapeType = "grape";
var grapeQuantity = 7;

if (!store.ContainsKey(grapeType))
{
    store[grapeType] = grapeQuantity;
}
else
{
    var value = store[grapeType];
    value += grapeQuantity;
    store[grapeType] = value;
}
```

Now, let's add some more lemons :lemon:. And we have to do the same thing :scream:. Well, not really. This is where we can extract a function which does this: it adds quantity of fruits.

1. Add a new line to add fruit quantity and name it just like that: `AddFruitQuantity`:
``` csharp
AddFruitQuantity(store, grapeType, grapeQuantity);
```

2. Click on the name, press `Ctrl` and `.` and press `Enter` to generate the method.

``` csharp
private static void AddFruitQuantity(Dictionary<string, double> store, string grapeType, int grapeQuantity)
{
    throw new NotImplementedException();
}
```

3. We can extract the checking functionality and moving it into our new function:

``` csharp
private static void AddFruitQuantity(Dictionary<string, double> store, string grapeType, int grapeQuantity)
{
    if (!store.ContainsKey(grapeType))
    {
        store[grapeType] = grapeQuantity;
    }
    else
    {
        var value = store[grapeType];
        value += grapeQuantity;
        store[grapeType] = value;
    }
}
```

Now, let's add lemons as well:

``` csharp
AddFruitQuantity(store, "lemon", 3);
```

::: tip
Notice that we didn't have to create separate variables again (we could though), but now we pass them as arguments to the function and we don't need to repeat ourselves.
:::

::: tip Functions
Because we might use certain functionality in the future, we have functions which helps us reuse our code multiple times.
:::


## Extension methods

You know me that I want to push you guys a little bit. What about being able to call this method `AddFruitQuantity` like this:
``` csharp
store.AddFruitQuantity(grapeType, grapeQuantity);
```

instead of this:

``` csharp
AddFruitQuantity(store, grapeType, grapeQuantity);
```

Isn't it more expressive, more declarative?

Well, we can. 

1. mark the `store` parameter with the `this` keyword:

``` csharp
private static void AddFruitQuantity(this Dictionary<string, double> dictionary, string key, int value)
```

2. make a separate `static class` called: `DictionaryExtension` (this is what we do: we extend the dictionary class) and move the function there:

``` csharp
static class DictionaryExtension
{
    public static void AddFruitQuantity(this Dictionary<string, double> dictionary, string key, int value)
    {
        if (!dictionary.ContainsKey(key))
        {
            dictionary[key] = value;
        }
        else
        {
            var val = dictionary[key];
            val += value;
            dictionary[key] = val;
        }
    }
}
```

Now, we can call these as we wanted:
``` csharp
store.AddFruitQuantity(grapeType, grapeQuantity);
store.AddFruitQuantity("lemon", 3);
```

Notice, that we do **not** need to pass the `store` as the first parameter.

::: tip Extension methods
This is called an **extension method** and it is a very popular way of extending the functionality of a class.
:::


### Refactoring

Because this function turned to be generic, we can rename it to `IncreaseValue`. In this way, we can use this not only for fruits, but for cars, books, anything we might create in the future.