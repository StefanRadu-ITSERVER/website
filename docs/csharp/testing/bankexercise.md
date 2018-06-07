# Bank Exercise

## Test project

First, we need to add a `Unit Test` project (tests are first).

::: tip Tools
We are going to use **MSTest** to test our code (which is built-in). 

You can use other thrid-party tools like **xUnit**, **NUnit** etc. (you can install these )
:::

Call it **BankTests** and name the solution **Bank**.

## Requirements

Then, we need to add a `.txt` file called **Requirements**.

These are the requirements that we need to implement for a bank account:

```
A BankAccount has:
- number (required)
- balance (initially zero)


Deposit money (amount)

	Deny deposit if:
	- the amount is negative


Withdraw money (amount)

	Deny withdraw if:
	- the amount is negative 
	- the amount is bigger than the balance
```

These are the things that we need to implement :grinning:


This is just an example, in real life you have more than these requirements.

## TDD

Let's begin by creating a test method for the `number` property of the bank account.

Rename the **test method** to: `TestID`.

Create a new `bankAccount` variable  based on an ID and **assert** based on the ID:

``` csharp
var bankAccount = new BankAccount(id: 1234);

Assert.AreEqual(1234, bankAccount.ID);
```

::: tip Assert.AreEqual
The first parameter that you pass (in our case `1234`) is the **expected value** (what you expect to get).

The second parameter is the **actual value** (the actual value that you get).

If these two match, then you know that your code behaves correctly (you *actually* get what you **expect** :sweat_smile:).
:::

Click the `BankAccount` class, press `Ctrl + .` and choose **Generate Class BankAccount**.

``` csharp
internal class BankAccount
{
	private int id;

	public BankAccount(int id)
	{
		this.id = id;
	}
}
```

We do the same for the `ID` to generate the property.

``` csharp
public int ID { get; internal set; }
```

::: tip IntelliSense
This is the **IntelliSense** feature of Visual Studio which helps us generate code. :satisfied:
:::

Now, we need to run the test.

You can see that if failed.

Let's make the test pass.

We can see that the `ID` property has no connection with the `id` field. 

We need to assing the value of the `id` parameter to the `ID` property:

``` csharp
internal class BankAccount
{
	public BankAccount(int id)
	{
		ID = id;
	}

	public int ID { get; internal set; }
}
```

Let's run now... and the test passed.

We need to **refactor** the code:

1. make the `BankAccount` public.
2. put the members in order (first properties, then constructors).
3. make the `set` accessor private.

``` csharp
public class BankAccount
{
	public int ID { get; private set; }

	public BankAccount(int id)
	{
		ID = id;
	}
}
```

Let's rerun the test to make sure it still passes. And it does.

::: tip
We need to apply Unit Tests to make sure our code works as we expect.
:::

::: tip XP
TDD is part of **eXtreme Programming (XP)** which implies that you write tests before the code to be tested. 
:::

Now, to write more readable tests, we need a way to separate and show what we are doing: assign some values, act on them to see what they do, and then see if what we wanted happened.

For this, we can use the **AAA Pattern**:

``` csharp
[TestMethod]
public void TestID()
{
	// arrange
	var bankAccount = new BankAccount(id: 1234);

	// act
	var id = bankAccount.ID;

	// asssert
	Assert.AreEqual(1234, id);
}
```

In this way, our tests are easy to read, organized and fast for others to understand what is our indent with it. :D

Shortly:
- in the **arrange**, we setup all neccesary variables and assign specific values to them
- in the **act**, we run the code (method, property etc.) that we indent to test
- in the **assert**, we check if what we expect is what we actually get from the code (if say, then it passes :D)


::: tip Remember
A **test method** is a method which returns void, has no parameters and has the `[TestMethod]` annotation.
:::

Let's create a second **test method** to test the balance.

We have a shortcut: `testm` and name it `TestBalance`.

``` csharp
[TestMethod]
public void TestBalance()
{
	// arrange
	var bankAccount = new BankAccount(id: 1234);

	// act
	var balance = bankAccount.Balance;

	// assert
	Assert.AreEqual(0, balance);
}
```

::: tip Notice
As you can see, a Unit Test is a piece of code which tests behaviour of a class member (methods, properties etc.).
:::

Let's generate the `Balance` property.

``` csharp
public object Balance { get; internal set; }
```

Let's run the test... and it failed. The value of `Balance` was not `0`, but `null`.

Let's make the test pass:

``` csharp
public int Balance { get; internal set; }
```

We only need to change the type of the `Balance` property to `int` (the default value of `int` is 0).

And let's run the test again... and it passes.

Let's refactor:

1. make the type `double`
2. make the `set` accessor private.

Let's rerun... and it passes.

::: tip Refactoring
In plain English, refactoring means that we change our code to increase perfomance (how it runs) and readability (how is written).

The idea with this is to not change too much code so that the tests fail – we just improve these two aspects of the code.
:::

We can also refactor not our code, but the test methods as well.

You can see that `1234` was used twice for the `id` and the `bankAccount` variable as well.

Imagine doing these for other `30` test methods. :astonished:

We can use a special method that runs before each test to assign values to these variables.

Here is the method with the neccesary fields:

``` csharp
BankAccount bankAccount;
int id;

[TestInitialize]
public void Initialize()
{
	id = 1234;
	bankAccount = new BankAccount(id);
}
```

Then, we can clean up the **test methods** a little bit:

``` csharp
[TestMethod]
public void TestID()
{
	// arrange

	// act
	var balanceId = bankAccount.ID;

	// asssert
	Assert.AreEqual(id, balanceId);
}

[TestMethod]
public void TestBalance()
{
	// arrange

	// act
	var balance = bankAccount.Balance;

	// assert
	Assert.AreEqual(0, balance);
}
```

Let's rerun to make sure it works. And no problem! :grin:

::: tip Debugging
You can debug your test methods by setting a breakpoint in the test methods themselves, then click the left-side circle and choose **Debug**. 
:::

We need to continue with the `Deposit` method.

So:
- `testm` and `Tab`
- call it `TestDeposit`

``` csharp
[TestMethod]
public void TestDeposit()
{
	// arrange

	// act

	// assert
}
```

In the **arrange**, let's declare an amount variable set to `40.50` (this is how much we are about to deposit).

In the **act**,  we call the `Deposit` method and pass the `amount`.

In the **assert**, we check to see if the `Balance` increased with the `amount`.

``` csharp
[TestMethod]
public void TestDeposit()
{
	// arrange
	var amount = 40.50;

	// act
	bankAccount.Deposit(amount);

	// assert
	Assert.AreEqual(amount, bankAccount.Balance);
}
```

Click on `Deposit` to generate the method and run the test. And it fails.

``` csharp
internal void Deposit(double amount)
{
	throw new NotImplementedException();
}
```

So, when we need to increase the `Balance` with the `amount`:

``` csharp
internal void Deposit(double amount)
{
	Balance += amount;
}
```

Let's run the test... and it passed :+1:

Let's refactor:

1. make the method `public`

Rerun the test.

But we have a condition: the amount must not be negative.

::: tip
This is how you should think about testing: start first with the "happy path" and then cover all remaining/edege cases (exceptions, boundaries etc.)
:::

Let's make another **test method** for that.

So:
- `testm` and `Tab`
- call it `TestNegativeDeposit`

Let's try to deposit `-40.99`.

``` csharp
[TestMethod]
public void TestNegativeDeposit()
{
	// arrange
	var amount = -40.99;

	// act
	bankAccount.Deposit(amount);

	// assert
	Assert.AreEqual(0, bankAccount.Balance);
}
```

We are expecting to get `0` for `Balance` because the deposit should be denied.

Let's run and it failed.

So, we need to fix this. We could use an `if` statement:

``` csharp
public void Deposit(double amount)
{
	if (amount > 0)
	{
		Balance += amount;
	}
}
```

And this works fine, but we need to be more explicit about what happened. 

To do this, we need to throw an `exception` – in our case `ArgumentOutOfRangeException` because why not :grin:

``` csharp
public void Deposit(double amount)
{
	if (amount < 0)
	{
		throw new ArgumentOutOfRangeException(nameof(amount), amount, "The amount must be positive");
	}

	Balance += amount;
}
```

It makes our code easier to debug and we can show these message to the user if we need to so that they know why it failed.

But now our test failed. :disappointed_relieved:

We need to tell it that we expect an exception to be thrown.

And we can do that:

``` csharp
[TestMethod]
[ExpectedException(typeof(ArgumentOutOfRangeException))]
public void TestNegativeDeposit()
{
	// arrange
	var amount = -40.99;

	// act
	bankAccount.Deposit(amount);

	// assert
	Assert.AreEqual(0, bankAccount.Balance);
}
```

**Success** – it passed (we expect to get this exception because we deposited a negative amount) :v:

::: danger
Generally don't use `try catch` blocks in tests methods – this is why we have `ExpectedException` for. :bowtie:

Use `try catch` only for testing multiple exceptions in a single test case (and you don't want to have individual test methods which is desired).

Still, you can inherit from `Exception` class and make custom expections that you can expect in this way differentiating between exceptions.
:::

Let's continue with the last method: `Withdraw`.

So:
- `testm` and `Tab`
- call it `TestWithdraw`

``` csharp
[TestMethod]
public void TestWithdraw()
{
	// arrange
	var amount = 44.50;
	bankAccount.Deposit(100);

	// act
	bankAccount.Withdraw(amount);

	// assert
	Assert.AreEqual(55.50, bankAccount.Balance);
}
```

Let's generate the `Withdraw` method.

``` csharp
internal void Withdraw(double amount)
{
	throw new NotImplementedException();
}
```

Run the test and it obviously failed. (nothing crazy yet) :unamused:

Okay, so let's implement the method:

``` csharp
internal void Withdraw(double amount)
{
	Balance -= amount;
}
```

And it passed. :relieved:

But, we can see in the **requirements** we have two conditions:

```
Deny withdraw if:
- the amount is smaller than the balance
- the balance is negative or 0
```

So, we need two new **test methods**:

- TestWithdrawNegativeAmount
- TestWithdrawTooMuch

``` csharp
[TestMethod]
public void TestWithdrawNegativeAmount()
{

}

[TestMethod]
public void TestWithdrawTooMuch()
{

}
```

We need to check by throwing exceptions as well:

``` csharp
[TestMethod]
[ExpectedException(typeof(ArgumentOutOfRangeException))]
public void TestWithdrawNegativeAmount()
{
	// arrange
	var amount = -50;

	// act
	bankAccount.Withdraw(amount);

	// assert
	Assert.AreEqual(0, bankAccount.Balance);
}
```

Run the test and it fails.

Fix the implementation:

``` csharp
internal void Withdraw(double amount)
{
	if (amount < 0)
	{
		throw new ArgumentOutOfRangeException(nameof(amount), amount, "The amount must be positive");
	}
	Balance -= amount;
}
```

And it passes. :smirk:

Let's do the same for the `TestWithdrawTooMuch`:

``` csharp
[TestMethod]
[ExpectedException(typeof(ArgumentOutOfRangeException))]
public void TestWithdrawTooMuch()
{
	// arrange
	var amount = 145.99;
	bankAccount.Deposit(100);

	// act
	bankAccount.Withdraw(amount);

	// assert
	Assert.AreEqual(100, bankAccount.Balance);
}
```

This fails. No surprise.

We need to add a new condition:

``` csharp
internal void Withdraw(double amount)
{
	if (amount < 0)
	{
		throw new ArgumentOutOfRangeException(nameof(amount), amount, "The amount must be positive");
	}
	if (amount > Balance)
	{
		throw new ArgumentOutOfRangeException(nameof(amount), amount, "The amount is too much");
	}
	Balance -= amount;
}
```

And this passed.

Let's refactor.

I need to:
1. make the method `public`

And we are done! :sweat_smile:

All the requirements are implemented.

Behold, this is the `BankAccount` class:

``` csharp
public class BankAccount
{
	public int ID { get; private set; }
	public double Balance { get; private set; }

	public BankAccount(int id)
	{
		ID = id;
	}

	public void Deposit(double amount)
	{
		if (amount < 0)
		{
			throw new ArgumentOutOfRangeException(nameof(amount), amount, "The amount must be positive");
		}

		Balance += amount;
	}

	public void Withdraw(double amount)
	{
		if (amount < 0)
		{
			throw new ArgumentOutOfRangeException(nameof(amount), amount, "The amount must be positive");
		}
		if (amount > Balance)
		{
			throw new ArgumentOutOfRangeException(nameof(amount), amount, "The amount is too much");
		}
		Balance -= amount;
	}
}
```

Now, we need to extract this class and put it into a library.

Let's create a new `Class Library` project called **Bank**.

Press `Ctrl + .` on the class and choose the last option to **move type...**.

This extracted the class into a separate file.

Cut and paste the file in the class library (also remove the `Class1.cs`).

Go back to the tests and fix the broken reference to the `BankAccount` class.

Go to **References**, then add reference and under **Projects**, choose the **Bank** project.

Let's rerun all the tests.

And they all pass.

Now, our class is inside a separate class library that we can share with anyone :D


## Console project

Let's see how our `BankAccount` class behaves (we wrote it, now we need to use it).

We can create a simple **Console Application** to do this (but remembered it can be consumed by any .NET project).

Name it **BankConsole**.

Let's create a bank account object.

``` csharp
var bankAccount = new BankAccount(9032321);
```

Add reference to the **Bank** class library.

We can try to deposit 310.50 and see the `Balance`:

``` csharp
bankAccount.Deposit(40);

Console.WriteLine(bankAccount.Balance);
```

Before we run, we need to set the **Console App** to be the startup project.

Then run.

And we get `40`.

Let's withdraw `100`.

``` csharp
bankAccount.Withdraw(100);

Console.WriteLine(bankAccount.Balance);
```

And we got our exception: *The amount was too much...*.

We can use a **try catch** here to not let the app crash:

``` csharp
 try
{
	bankAccount.Withdraw(100);
}
catch (Exception ex)
{
	Console.WriteLine(ex.Message);
}
```

Now, we get a message:

```
40
The amount is too much
Parameter name: amount
Actual value was 100.
40
```

Wonderful!

This concludes our journey with TDD :D

I hope you liked it and will use it in the future! :wink:

Check out the source code on [GitHub](https://github.com/danielsimionescu/csharp-unittesting-bank).
