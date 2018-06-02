# Delegates

We cannot create a delegate like so:

``` csharp
var function = x => x * x;
```

This works in JavaScript, but not in C#.

In C#, we need to define a delegate:

``` csharp
public delegate int Delegate(int x);
```

And then use it instead of `var`:

``` csharp
Delegate multiply = x => x * x;

var result = multiply(3);
Console.WriteLine(result); // 9
```

So, it cannot infer the type by default.

But, we can do something like this without the delegate:

``` csharp
int multiply(int x) => x * x;

var result = multiply(3);
Console.WriteLine(result); // 9
```

This is a **local function**.

