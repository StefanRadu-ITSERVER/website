# nameof operator

For example, we might have the following class with a `Deposit` method which implements some validation:

``` cs
internal class BackAccount
{
    public double Balance { get; private set; }

    public void Deposit(double amount)
    {
        if (amount < 0)
        {
            throw new ArgumentOutOfRangeException("amount", amount, "The amount cannot be negative");
        }

        Balance += amount;
    }
}
```

If, for instance, we want to rename the `amount` parameter to something else, then the string from the exception is left unchanged which leads to bugs and wrong error messages.

This is where we can use the `nameof` operator:

``` cs
internal class BackAccount
{
    public void Deposit(double amount)
    {
        if (amount < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(amount), amount, "The amount cannot be negative");
        }
    }
}
```

Now, this is not just a string, but a variable name which can be refactored.

## Summary

So, in essence the `nameof` operator is useful when you need to get the **name** of a variable as a string.
