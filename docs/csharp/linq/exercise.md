# Exercise

## Context

Let's make an exercise with LINQ :smile:

Here's an array of phones:

``` csharp
var phones = new List<Phone>
{
    new Phone("Apple", "iPhone 8 Plus", 2017, 5.5, 799.99),
    new Phone("Huawei", "P20 Pro", 2018, 6.1, 1000),
    new Phone("Apple", "iPhone X", 2017, 5.8, 1149.00),
    new Phone("LG", "V30", 2017, 6, 700),
    new Phone("Samsung", "S9", 2018, 5.8, 720),
    new Phone("Google", "Pixel 2 XL", 2017, 6, 649.99),
    new Phone("LG", "G6", 2017, 5.7, 456.00),
};
```

And the `Phone` class:

``` csharp
public class Phone
{
    public string Manufacturer { get; set; }

    public string Model { get; set; }

    public int Year { get; set; }

    public double ScreenSize { get; set; }

    public double Price { get; set; }

    public Phone(string manufacturer, string model, int year, double screenSize, double price)
    {
        Manufacturer = manufacturer;
        Model = model;
        Year = year;
        ScreenSize = screenSize;
        Price = price;
    }

    public override string ToString()
    {
        return $"{Manufacturer} {Model} {Year} is ${Price} and has {ScreenSize}\"";
    }
}
```

## Questions

### Total phones

How many phones are there?

Lambda syntax

``` cs
var totalPhones = phones.Count;
Console.WriteLine(totalPhones);
```

### Total Apple phones

How many phones made by Apple are there?

``` cs
var totalApplePhones = phones
    .Count(phone => phone.Manufacturer == "Apple");

Console.WriteLine(totalApplePhones);
```

### Most expensive phone

Which phone is the most expensive?

``` csharp
var mostExpensivePhone = phones
    .Aggregate((phone1, phone2) =>
    {
        if (phone1.Price > phone2.Price)
            return phone1;
        return phone2;
    });

Console.WriteLine(mostExpensivePhone);
```

We can use the **conditional operator** to shorten this up:

``` csharp
var mostExpensivePhone = phones
    .Aggregate((phone1, phone2) => phone1.Price > phone2.Price ? phone1 : phone2);

Console.WriteLine(mostExpensivePhone);
```

To get the cheapest, just change `>` with `<`.

Another way is to use `Max` and `Find`:

``` cs
var maxPhonePrice = phones
    .Max(phone => phone.Price);

var mostExpensivePhone = phones
    .First(phone => phone.Price == maxPhonePrice);

Console.WriteLine(mostExpensivePhone);
```

### Total price of phones

Let's calcuate the sum of all the prices:

``` cs
var totalPhonesValue =
    phones.Sum(car => car.Price);

Console.WriteLine(totalPhonesValue);
```

### Sort phones by model

Lambda syntax

``` csharp
var query = phones
    .OrderBy(phone => phone.Model);
```

LINQ syntax

``` csharp
var query =
    from phone in phones
    orderby phone.Model
    select phone;
```

In both cases, we order the `phones` based on the `Model` property.

We can print them:

``` csharp
foreach (var phone in query)
{
    Console.WriteLine(phone.Model);
}
```

### Group phones

Sort the phones descending and group them into `2` groups: 
1. the expensive ones (under 700)
2. the very expensive ones (above 701)

Also, print how many are in each group.

``` csharp
var query = phones
    .OrderByDescending(phone => phone.Price)
    .GroupBy(phone => phone.Price > 700);

foreach (var group in query)
{
    Console.WriteLine("Total " + group.Count());

    foreach (var phone in group)
    {
        Console.WriteLine(phone.Model + " $" + phone.Price);
    }
    Console.WriteLine();
}
```

### All phones above $700 

WHERE - filtering

Display the phones that are more than $700 sorted descending by price.

Lambda syntax

``` csharp
var query = phones
    .Where(phone => phone.Price > 700)
    .OrderByDescending(phone => phone.Price);
```

LINQ syntax

``` csharp
var query =
    from phone in phones
    where phone.Price > 700
    orderby phone.Price descending
    select phone;
```

In both ways, we generate a subset of the collection with the items that satisfy the condition (in our case their price above 700).

Then, print the result:

``` csharp
foreach (var phone in query)
{
    Console.WriteLine(phone);
}
```

## 
How many manufacturers are there?

``` csharp
var totalManufacturers = phones
    .Select(phone => phone.Manufacturer)
    .Distinct()
    .Count();

Console.WriteLine(totalManufacturers);
```
