# Dog Exercise
Let's create a Unit Test project called "DogTests" and the solution "Dog".

## Requirements
Let's see the requirements

A dog has:
- name (string)
- age (int)
- weight (double)
- color (enum: white, black and brown)

Deny name if empty or less than 3 chars.
Deny age if less than 0 (can be several months).
Deny weight if less than 0 (can be hundres of grams).
Deny color if is not from enum.

Let's start with the `Name` and `Age`.

``` csharp
[TestMethod]
public void TestMethod1()
{
    // arrange
    var name = "Rex";
    var age = 12;

    // act
    var dog = new Dog(name, age);

    // assert
    Assert.AreEqual(age, dog.Age);
    Assert.AreEqual(name, dog.Name);
}
```

Generate the `Dog` class and the properties.

``` csharp
internal class Dog
{
    private string name;
    private int age;

    public Dog(string name, int age)
    {
        this.name = name;
        this.age = age;
    }

    public int Age { get; internal set; }
    public string Name { get; internal set; }
}
```

If we run the test, it fails because the backing fields are not connected to the properties. Let's fix them.

``` csharp
internal class Dog
{
    public int Age { get; internal set; }
    public string Name { get; internal set; }

    public Dog(string name, int age)
    {
        Name = name;
        Age = age;
    }
}
```

Refactoring:
1. make the `set` accessor `private` for both properties
2. make the class `public`
3. rename the test method to `TestNameAge`.

::: tip private set
Encapsulation:
- you cannot change the value of this property outside this class.
- the property is not accessible for other classes.

When we create a new object of this class and we pass the arguments, then is the only time we have access to this property because the constructor of this class is able to access it being in the same class with the private property.

I choose to have the Color as a auto-property because you will set its value once and it will be the same during the lifetime of the object (a dog keeps its color) and we don't want external classes to change it.
:::


Let's test the weight:

``` csharp
[TestMethod]
public void TestWeight()
{
    // arrange
    var weight = 5.4;

    // act


    // assert
}
```

As you can see, we need the variables from the first test method again, let's make them available to all test methods.

``` csharp
Dog dog;
string name;
int age;
double weight;

[TestInitialize]
public void Initialize()
{
    name = "Rex";
    age = 12;
    weight = 5.4;
}
```

And here is the test method for the `Weight`:

``` csharp
[TestMethod]
public void TestWeight()
{
    // arrange
    dog = new Dog(name, age);

    // act
    dog.Weight = weight;

    // assert
    Assert.AreEqual(weight, dog.Weight);
}
```

Let's generate the `Weight` property.

``` csharp
public double Weight { get; internal set; }
```

And if we run the test, it works.

We can also leave out the internal from the `set`.

Let's continue with the `Color`.

``` csharp
[TestMethod]
public void TestColor()
{
    // arrange
    var color = Colors.White;

    // act

    // assert
}
```

Generate the `Colors` enum and add the colors there.

Now, continue the test method:

``` csharp
[TestMethod]
public void TestColor()
{
    // arrange
    var color = Colors.White;
    dog = new Dog(name, age);

    // act
    dog.Color = color;

    // assert
    Assert.AreEqual(color, dog.Color);
}
```

And generate the `Color` property.

``` csharp
public Colors Color { get; set; }
```

Let's look now at the exceptions.

First, the `Name` property.

So, we need to make sure that the value we pass for the `Name` is not empty or null. We can do this directly in the `Name` property. 

One problem is that right now this property is an **auto-property**. We need to make it a full property to be able to add **Validation**.

But first, let's add the test method.

``` csharp
[TestMethod]
[ExpectedException(typeof(ArgumentOutOfRangeException))]
public void TestEmptyName()
{
    // arrange
    name = string.Empty;

    // act
    dog = new Dog(name, age);

    // assert
}
```

Notice that I didn't add anything to the **assert** section. The `ExpectedException` is part of it indirectly.

Now, go to the `Name` property and press `Ctrl + .` on it, then choose **Convert to full property**.

It splits it to:

``` csharp
private string _name;

public string Name { get => _name; private set => _name = value; }
```

The first one is the **backing field** or **store field**.
And the second one is the actual property which preserves its value inside its associated backing field.

::: tip Naming
The backing field is always private so we name it with lowercase.
The property is public so it starts with uppercase.
:::

::: tip value
The `value` keyword is used in **public properties** to represent the input/data that was passed in by the user. 

Throw it, we get that information passed to the property.

Also, the type of the `value` parameter always matches the type of the property.
:::


We need to rewrite it a little bit:

``` csharp
public string Name
{
    get => _name; private
    set
    {
        _name = value;
    }
}
```

And in the `set` accessor we can check the value we get for the `name`.

``` csharp
public string Name
{
    get => _name; private
    set
    {
        if (string.IsNullOrEmpty(value))
        {
            throw new ArgumentOutOfRangeException(nameof(Name), value, "Name cannot be empty");
        }
        _name = value;
    }
}
```

And now the test passes :satisfied:

This is called **Data Validation**.

::: tip Explanation
The backing field which stores the data can be changed if the value passes the conditions in the set assesor of the associtated property.

Here we didn't achieve Encapsulation because the property which operates on this backing field can be whenever called outside this class and it can change the data in the backing field.
:::

So, if the condition/ contraint is not respected, then an exception will be thrown.


But the `Name` must be at least `3` characters long as well.

Let's add a test method for that.

``` csharp
[TestMethod]
[ExpectedException(typeof(ArgumentOutOfRangeException))]
public void TestShortName()
{
    // arrange
    name = "RT";

    // act
    dog = new Dog(name, age);

    // assert
}
```

If we run this, it fails. 

Let's fix it:

``` csharp
public string Name
{
    get => _name; private
    set
    {
        if (string.IsNullOrEmpty(value))
        {
            throw new ArgumentOutOfRangeException(nameof(Name), value, "Name cannot be empty");
        }
        if (value.Length < 3)
        {
            throw new ArgumentOutOfRangeException(nameof(Name), value, "Name is too short");
        }
        _name = value;
    }
}
```

And it works.

Let's do the same for the `Age`.

``` csharp
[TestMethod]
[ExpectedException(typeof(ArgumentOutOfRangeException))]
public void TestNegativeAge()
{
    // arrange
    age = -8;

    // act
    dog = new Dog(name, age);

    // assert
}
```

First, we need to convert it to a **full property**.

And then we can add an `if` statement:

``` csharp
public int Age
{
    get => _age;
    private set
    {
        if(value < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(Age), value, "Age cannot be below 0");
        }
        _age = value;
    }
}
```

And this passes.

We have to do the exact same thing for the `Weight` property:
1. add a test method

``` csharp
[TestMethod]
[ExpectedException(typeof(ArgumentOutOfRangeException))]
public void TestNegativeWeight()
{
    // arrange
    weight = -8;
    dog = new Dog(name, age);

    // act
    dog.Weight = weight;

    // assert
}
```

2. convert to full property

3. add the condition to the validate the value

``` csharp
public double Weight
{
    get => _weight;
    set
    {
        if (value < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(Weight), value, "Weight cannot be below 0");
        }
        _weight = value;
    }
}
```

And the `Color` is already good because the `enum`, in essence`, is a list of options and we cannot assign something else than what it is provided by the enum.

Done :fireworks:

## Class library

We need to extract the `Dog` class into a separate **class library** project.

In the **Unit Test** project, add reference to this **class library**.

Also, add this to use the `Colors` enum:

``` csharp
using static DogLibrary.Dog;
```

## Console project

Let's use the class.

We need to create a new **console application** called **DogConsole**.

Let's create a new dog:

``` csharp
var dog1 = new Dog("Lassie", 4);  // the set accessors are invoked here.
Console.WriteLine(dog.Name);      // the get accessors are invoked here. 
Console.WriteLine(dog.Age);  
```

We can run (don't forget to set the **console application** as the startup project).

Let's create a dog with wrong input values:

``` csharp
var dog3 = new Dog("TY", -2);
Console.WriteLine(dog3.ToString());
```

But this crashes the application because an exception is thrown.

We need to surround it with a `try catch` block:

``` csharp
try
{
    var dog3 = new Dog("TY", -2);
    Console.WriteLine(dog3.ToString());
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}
```

So, if exceptions are thrown, then we print the message on the screen. Usually we will do more things than this.


And that it all, folks! :grin:

Check out the source code on [GitHub](https://github.com/danielsimionescu/csharp-unittesting-dog).
