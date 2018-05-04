---
title: Methods
---

## String Manipulation

We are going to see some useful methods that can be used on `String` objects.
To illustrate the methods, we can use this variable as our example:
``` csharp
var text = "It's a cold day in the woods";
```


[[toc]]



### `Substring()` method
This method returns a brand-new string with the value: "a cold day"
``` csharp
var subtext = text.Substring(5, 10);
Console.WriteLine(subtext);
```
So, we can get only a part of a `string`.


### `Join()` method
We can create a new string based on an array of values and a separator.
``` csharp
var numbers = new[] { 1, 2, 3, 4, 5 };

var result = string.Join(",", numbers);
Console.WriteLine(result);
```




### `Concat()` method
We can combine two string together. If we run just this line:
``` csharp
string.Concat(text, " of the village");
Console.WriteLine(text);
```

The value of the text variable doesn't change (we know that the string is immutable). Therefore, we need to reassign the new value:
``` csharp
text = string.Concat(text, " of the village");
Console.WriteLine(text);
```

Instead of `string.Concat()`, we can use the plus operator `+` to combine strings together.
``` csharp
text += " of the village";
Console.WriteLine(text);
```
This operator is called the **concatenation operator**.

::: tip + operator
The compiler is smart enough to tell that when you use the `+` operator with strings, you mean that you want it to combine them togheter. With integers, it performs addition. 
<br>
The compiler is **dope**.
:::
![Dope girl](https://media.giphy.com/media/Zy2H3rtcczV96/giphy.gif)




### `Replace()` method
We can replace any string occurance inside of a string:
``` csharp
text = text.Replace("cold", "warm");
Console.WriteLine(text);
```
This works the same as the `string.Concat()` method: it returns a new string. We need to reassign the value to the `text` variable. If not, the value of `text` remains the same.

Like the `Substring` method, `Replace` actually returns a new string and does not modify the original string.


### `ToUpper()` method
We can transform all the characters of a string to upper case:
``` csharp
text = text.ToUpper();
Console.WriteLine(text);
```

### `ToLower()` method
``` csharp
text = text.ToLower();
Console.WriteLine(text);
```


### `Insert()` method
We can insert another sequence inside of a string:
``` csharp
text = text.Insert(12, "foggy ");
Console.WriteLine(text);
```

### `IndexOf()` method
We can find the starting index of a specific string inside another one:
``` csharp
var index = text.IndexOf("warm");
Console.WriteLine(index);
```
::: warning Negative index
If the method returns a negative index (-1), then it means that there is no such string inside.
:::


### `Length` property
We can get the length / size of a string through the Length property:
``` csharp
var length = text.Length;
Console.WriteLine(length);
```

### `Contains` method
We can use the `Contains` method to check if there is a string in another one:
``` csharp
if (text.Contains("warm"))
{
    Console.WriteLine("The string was found");
}
```

### `Copy` method
We can copy the value of one string to another one:
``` csharp
var anotherText = string.Copy(text);
Console.WriteLine(anotherText);
```


### `Trim` method

We can remove white-spaces from the beginning and end of a string with the `Trim` method:

``` csharp
var phoneNumber = " 232 323 232  ";
phoneNumber = phoneNumber.Trim();
```

::: warning
Notice that this doesn't affect the white-spaces inside of the string.
:::

You can change how the `Trim` method works by providing a set of characters:
``` csharp
var phoneNumber = ".232 323 232,";
var chars = new char[] { '.', ',' };
phoneNumber = phoneNumber.Trim(chars);
```


### `ToArray()` method
We can transform a string to an array:
``` csharp
var textAsArray = text.ToArray();
Console.WriteLine(textAsArray);
```


#### Example
Let's now use these methods to not guess where a string is, but to do it programmatically:
``` csharp
var term = "warm";
var position = text.IndexOf(term);
if (position > -1)
{   
    text = text.Insert(position + term.Length, " sunny");
}
Console.WriteLine(text);
```

``` csharp
if (text.Contains("foggy"))
    text = text.Replace("foggy", string.Empty);
```

To make the code cleaner, we can assign the value to a variable:
``` csharp
term = "foggy";
if (text.Contains(term))
    text = text.Replace(term, string.Empty);
```

::: tip Remember
Keep in mind that all the methods that appear/seem to change a string, in fact they return a new one. This can have huge perfomance issues which we will look at in a bit.
:::


### Bye
You can now have fun with these methods :sweat_smile:

![Fun](https://media.giphy.com/media/FUhalvNbmECkg/giphy.gif)