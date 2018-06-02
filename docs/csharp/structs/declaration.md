Let's create a struct type.

We need to use the `struct` keyword:

``` csharp
struct Car
{
    public int Year;
    public string Manufacturer;
}
```

Then, we can create a new variable of this `struct` type in the same way that we would with a `class`:

``` cs
var car = new Car
{
    Manufacturer = "Porsche",
    Year = 2015
};

Console.WriteLine(car.Manufacturer); // Porsche
```

This `struct` is a type of complex data structure.

