# Declaration

Let's declare a method which prints a message to the screen:

``` csharp
public static void PrintMessage()
{
    Console.WriteLine("Thank you");
}
```

Now, if we want to pass a specific message to print, we can pass it as an **argument** and we need to declare the message as a **parameter**:

``` csharp
public static void PrintMessage(string message)
{
    Console.WriteLine(message);
}
```

As you can see, we can have two methods named the same, but they differ through the **parameter**.

::: tip Method overloading
The technical term for this is **method overloading** and we are able to declare them both because they have different **signatures**.
:::

We call them like so:

``` cs
PrintMessage();
PrintMessage("Understanding methods");
```

## Refactoring

To not repeat the logic inside methods, we can call one from another:

``` csharp
public static void PrintMessage()
{
    PrintMessage("Thank you");
}

public static void PrintMessage(string message)
{
    Console.WriteLine(message);
}
```
