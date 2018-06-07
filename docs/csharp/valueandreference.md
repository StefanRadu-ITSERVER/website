# Value and Reference types

Let's see the difference between **value types** and **reference types**:

The easiest way is to compare them in code :D

I am going to create `2` numbers:

``` csharp
var number1 = 1;
var number2 = 2;
```

These are two simple `integer` varibles.

Let's print their value to the console:

``` csharp
Console.WriteLine(number1); // 1
Console.WriteLine(number2); // 2
```

Now, let's assign the value of the second one to the first one and print again:

``` csharp
number1 = number2;

Console.WriteLine(number1); // 2
Console.WriteLine(number2); // 2
```

Nothing is unusual here (a simple assigment).

Now, let's change the value of `number2` to something else and print them again:

``` csharp
number2 = 3;

Console.WriteLine(number1); // 1
Console.WriteLine(number2); // 3
```

So, we can see our assigments work well. These variables hold their values separately.

Now, let's create `2` lists which hold a number:

``` csharp
var list1 = new List<int> { 1 };
var list2 = new List<int> { 2 };
```

If we print the first item of these lists we get:

```
Console.WriteLine(list1[0]); // 1
Console.WriteLine(list2[0]); // 2
```

Now, let's assign the second list to the first one as we did before with the numbers:

``` csharp
list1 = list2;

Console.WriteLine(list1[0]); // 2
Console.WriteLine(list2[0]); // 2
```

And we indeed see the same behavior: they have the same item inside.

Now, let's change the number from the second list and see what we get:

``` csharp
list2[0] = 3;

Console.WriteLine(list1[0]); // 3
Console.WriteLine(list2[0]); // 3
```

Now, here is something unusual: they both have the same value even though we didn't change the value of the first list explicitely. :fearful:

## Explanation

This is the difference between value types and reference types.

Value types hold the values directly, whereas reference types hold references to values. 

When we did this:

``` csharp
list1 = list2;
```

we pointed both variables to the same object value. 

So, these two references get the same value.

When we change the contents of `list2` afterwards, we change the value of the object. When we get the values of the lists, obviously we get the new value because they retrieve the same object.

## Summary

Numbers are **value types** whilst `Lists` are objects. They store their data differently.

Let's see another example, this time with a `struct` and a custom `class`.

`struct` is a value type, wheres `class` (or objects) are reference types.

## Example 2 

I am going to create a `Rectangle` as a `struct` and as a `class` to show the same concept.

Let's start with the `struct`:

``` csharp
public struct Rectangle
{
    public int Length { get; set; }

    public int Width { get; set; }
}
```

Then, let's create two rectangles and, for brevity, we are going to look at the `Width` property:

``` csharp
var rectangle1 = new Rectangle
{
    Width = 1,
    Length = 5
};

var rectangle2 = new Rectangle
{
    Width = 5,
    Length = 10
};

Console.WriteLine(rectangle1.Width); // 1
Console.WriteLine(rectangle2.Width); // 5
```

Now, assign the second to the first one and change the `Width` of the second one:

``` csharp
rectangle1 = rectangle2;

rectangle2.Width = 8;

Console.WriteLine(rectangle1.Width); // 5
Console.WriteLine(rectangle2.Width); // 8
```

These two rectangles are independent from each other.

We are copying only the value from one to another one, not like references.

Now, you only need to change `struct` to `class`, and we get for the last ones;

``` csharp
Console.WriteLine(rectangle1.Width); // 8
Console.WriteLine(rectangle2.Width); // 8
```

You can see again that these two rectangles point to the same location in memory where the object is stored.

These two instances reference the same object basically which results that they get the same value.

So, we have an object and a reference to that object.

## Null values

Now, one more thing that you have to consider here is the `null` value.

We can assign `null` to any reference type:

``` csharp
var list1 = new List<int> { 1 };
list1 = null;
```

This is impossible to do for value types:

``` csharp
var number1 = 1;
number1 = null; // massive error
```

## Default values

All types have **default values**:

``` csharp
int number1;      // 0
char character1;  // '\0'
bool boolean;     // false
string string1;   // null
List<int> list1;  // null
```

It means that if we don't assign any value to a variable, then it gets the **default type** of that type.

If you need the *default** value of a type, there's a  special keyword  called `default`:

``` csharp
var defaultIntValue = default(int);
Console.WriteLine(defaultIntValue); // 0
```

But, what happens if we want to assign `null` to a number?

You know it's a difference between `null` and `0`. `0` means something, but `null` means nothing (it points to no object).

## nullable types

This is where we can use **nullable types** which adds the ability to any type to get the `null` value:

``` csharp
int? number1 = null;
```

So, we can do this by adding the `?` question mark after the type.

Now, even though it is a number (a value type), it can have `null` as a value. :grin`:


### Summary

**Value types** are:
- numbers (`int`, `double`, `float`)
- booleans (`bool`)
- characters (`char`)
- enums (`enum`)
- structs (`struct`)

All the others are **reference types**:
- objects (`string`, custom objects)
