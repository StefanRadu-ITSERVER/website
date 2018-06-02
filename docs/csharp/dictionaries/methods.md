# Methods

``` csharp
var store = new Dictionary<string, double>
{
    ["peach"] = 15,
    ["grape"] = 23,
    ["lemon"] = 8,
    ["coconut"] = 10
};
```

Methods

If we try to add a key which already exists, the `ArgumentException` is thrown.

## Add

``` csharp
try
{
    store.Add("peach", 21);
}
catch (ArgumentException)
{

}
``` 

## ContainsKey

``` csharp
var key = "peach";

store.ContainsKey(key)
    ? store[key]
    : $@"Key "{key}" doesn't exist.";
```

## Remove

``` csharp
store.Remove("coconut");
```

## Count

``` csharp
var totalFruitTypes = store.Count;
Console.WriteLine(totalFruitTypes);
```

## TryGetValue

``` csharp
store.TryGetValue("lemon", out double quantity);
Console.WriteLine(quantity);
```



