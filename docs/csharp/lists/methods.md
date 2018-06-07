# Methods

We don't need to specify the size as with the array because lists automatically resize themselves as we add new items:

``` csharp
var fruits = new List<string>();
```

## Add

``` csharp
fruits.Add("cherry");
fruits.Add("banana");
fruits.Add("watermelon");
```

## Remove

``` csharp
fruits.Remove("banana");
```

## RemoveAt
``` csharp
fruits.RemoveAt(1);
```

## Contains

``` csharp
if (fruits.Contains("cherry"))
{
    Console.WriteLine("Yes, there are cherries");
}
```

## IndexOf
``` csharp
var index = fruits.IndexOf("watermelon");
```

## Insert
``` csharp
fruits.Insert(1, "lemon");
```

## Count
``` csharp
Console.WriteLine(fruits.Count());
```

## Clear
This empties a list:

``` csharp
fruits.Clear();
```

## AddRange

Add a collection to a list:

``` csharp
var array = new string[] { "Banana", "Melon", "Plumb" };
fruits.AddRange(array);
```

## string.Join

It converts a list to a string

``` csharp
var listString = string.Join(",", fruits);
Console.WriteLine(listString);
```

## Split
The reverse operation is Split

``` csharp
var list = listString.Split(',').ToList();
```

## Sort

``` csharp
fruits.Sort();
```

## Custom sort with IComparer

``` csharp
public class Laptop
{
    public string Make { get; set; }

    public double Price { get; set; }

    public Laptop(string make, double price)
    {
        Make = make;
        Price = price;
    }
}
```

``` csharp
public class LaptopPriceComparer : IComparer<Laptop>
{
    public int Compare(Laptop x, Laptop y)
    {
        return x.Price.CompareTo(y.Price);
    }
}
```

``` csharp
var laptops = new List<Laptop>
{
    new Laptop("Macbook", 3000),
    new Laptop("Asus", 1500),
    new Laptop("HP", 1100)
};

laptops.Sort(new LaptopPriceComparer());

foreach (var laptop in laptops)
{
    Console.WriteLine(laptop.Make);
}
```

## Sort with OrderBy
``` csharp
var sortedLaptops = laptops
    .OrderBy(laptop => laptop.Price);
```
