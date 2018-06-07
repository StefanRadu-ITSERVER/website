# Objects

Let's create two instances of a `Car` class which has two properties: manufacturer and year.

This is the `Car` class:

``` csharp
public class Car
{
    public string Manufacturer { get; set; }
    public int Year { get; set; }
}
```

Now, we can create two instances of this class:

``` csharp
var porsche = new Car
{
    Manufacturer = "Porsche",
    Year = 2015
};

var ferrari = new Car
{
    Manufacturer = "Ferrari",
    Year = 2017
};
```

These two instances are pointing to a location in memory where the values are stored.

If I do something like this: `porsche = ferrari`, then, both the `porsche` and the `ferrari` variables point to the same location in memory (we have two **references** to the first object).

Comparison

objects - instances - references

### Garbage collector

The previous reference which `ferrari` pointed to is now destroyed by the Garbage Collector (the memory is freed up).
