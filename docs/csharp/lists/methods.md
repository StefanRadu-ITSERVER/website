# Methods

We don't need to specify the size as with the array because lists automatically resize themselves as we add new items:

``` csharp
var fruits = new List<string>();
```

## Add

fruits.Add("cherry");
fruits.Add("banana");
fruits.Add("watermelon");


## Remove
fruits.Remove("banana");


## RemoveAt
fruits.RemoveAt(1);


## Contains

if (fruits.Contains("cherry"))
{
    Console.WriteLine("Yes, there are cherries");
}

## IndexOf

var index = fruits.IndexOf("watermelon");

## Insert
fruits.Insert(1, "lemon");


## Count
Console.WriteLine(fruits.Count());


## Clear
This empties a list:

fruits.Clear();


## AddRange

Add a collection to a list:

  var array = new string[] { "Banana", "Melon", "Plumb" };
            fruits.AddRange(array);

## string.Join

It converts a list to a string
            
var listString = string.Join(",", fruits);
Console.WriteLine(listString);


## Split
The reverse operation is Split

var list = listString.Split(',').ToList();


## Sort

  fruits.Sort();








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







