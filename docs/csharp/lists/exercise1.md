# Exercise: List methods

We are going to make a Generic `List` with **phones**.

Let's begin by creating a `Phone` class with the properties that we need:

``` csharp
public class Phone
{
    public string Make { get; set; }
    public string Model { get; set; }
    public double Price { get; set; }
}
```

Then, let's add a constructor for these `3` properties:

``` csharp
public Phone(string make, string model, double price)
{
    Make = make;
    Model = model;
    Price = price;
}
```

Now, we can create a `List` with `4` phones (prices are fictitious):

``` csharp
var phones = new List<Phone>
{
    new Phone("iPhone", "10", 310),
    new Phone("LG", "G7", 180),
    new Phone("Samsung", "Galaxy S9", 280),
    new Phone("Samsung", "Galaxy S8", 210),
};
```

## Assigment
We have `6` questions that we need to ask:

### How many phones are there?

``` csharp
var totalPhones = phones
    .Count;

Console.WriteLine(totalPhones);
```

We can print a message as well to show what is the result about.

``` csharp
Console.WriteLine("Total phones" + totalPhones);
```

#### Capacity vs Count
You can specify the capacity of the list if you know how many items it will have. This helps a lot with perfomance because the compiler can preallocate the memory upfront.

The results of these two are the same because we didn't specify the size of the list:

``` csharp
phones.Count == phones.Capacity; // true
```

### How many "Samsung" phones are there?

``` csharp
var totalSamsungPhones = phones
    .Where(phone => phone.Make == "Samsung")
    .Count();

Console.WriteLine("Total Samsung phones: " + totalSamsungPhones);
```

### How many unic manufacturers are there?

``` csharp
var totalUnicMakers = phones
      .Select(phone => phone.Make)
      .Distinct()
      .Count();

Console.WriteLine("Total unic manufacturers: " + totalUnicMakers);
```

### What is the total price of phones?

``` csharp
var totalPhonePrices = phones
    .Sum(phone => phone.Price);

Console.WriteLine("Total price: " + totalPhonePrices);
```

### Which phones are cheaper than $250?

``` csharp
var phonesCheaperThan250 = phones
    .Where(phone => phone.Price < 250);

foreach (var phone in phonesCheaperThan250)
{
    Console.WriteLine(phone);
}
```

Now, this displays the **fully qualified name** of the class, but we would like something else. 

Let's override the `ToString` method to display a phone in the way that makes sense for us.

``` csharp
public override string ToString()
{
    return $"{Make} {Model}: ${Price}";
}
```

### Which phone is the most expensive?
 
``` csharp
var mostExpensivePhone = phones
    .Max(phone => phone.Price);

Console.WriteLine("Most expensive phone: " + mostExpensivePhone);
```

## Awesome
We asked all `6` questions :D



## Part 2

### Are there any "iPhones"?

``` csharp
var containsIphones = phones
    .Exists(phone => phone.Make == "iPhone");

Console.WriteLine("Contains iPhones: " + containsIphones);
```

### Find the first "Samsung".

``` csharp
var firstSamsung = phones
    .Find(phone => phone.Make == "Samsung");

Console.WriteLine(firstSamsung);
```

`Find` is similar to `FirstOrDefault` in the sense that they return `null` if there is no such item, whereas `First` throws an exception if the items is not present in the list.

All these three methods perform a linear search through the collection making them not as performant as applying a `BinarySearch`.


### Display the most expensive phones.

Now, if you find yourself writing the code to check if a phone is expensive too many times, this is where you can extract it into a separate function:

``` csharp
public static bool ExpensivePhone(Phone phone)
    => phone?.Price >= 300;
```

And then call it:

``` csharp
var expensivePhones = phones
    .Where(ExpensivePhone);

foreach (var phone in expensivePhones)
{
    Console.WriteLine(phone);
}
```

In this way, if you intend to write more code to check for the same thing, you can reuse this function.

