# String Interpolation
We can't talk about the `String` class and ommit the **interpolation**. :grin:

## Usage

Maybe, you want to insert some values in a string at certain **positions**. 

There is the `string.Format` method which is the old approach:

``` csharp
var name = "Daniel";
var age = 21;

var message = string.Format("I'm {0} and {1} years old.", name, age);
Console.WriteLine(message);
```

The newer approach is **string interpolation** which was introduced in `C#6`:

``` csharp
var name = "Daniel";
var age = 21;

var message = $"I'm {name} and {age} years old."; 
Console.WriteLine(message);
```

You need to prepend the string with the dollar `$` sign. 

Then you can insert the variables where you need them. 

No need to use numbers, remember the order etc. :relaxed:


::: warning C# vs C++ strings
In a `C#` string, there is no `null terminating character` (that is the `\0`). 

As you may or may not know, in `C++` each string must end with this **special character** which denotes the fact that the string has ended.
:::