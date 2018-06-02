# Sorting

This is our `Dictionary`:

``` csharp
var store = new Dictionary<string, double>
{
    ["peach"] = 15,
    ["grape"] = 23,
    ["lemon"] = 8,
    ["coconut"] = 10
};
```

## Sorting by Keys
We need to get the `Keys` into an array:

``` csharp
var sortedStoreByKey = store
    .Keys
    .ToArray();
```

Once we have the keys in an array, we can sort them:

``` csharp
Array.Sort(sortedStoreByKey);
```

Then, we display the `store` dictionary based on this array:

``` csharp
foreach (var key in sortedStoreByKey)
{
    Console.WriteLine($"{key}: {store[key]}");
}
```

## Sorting by Values

``` csharp
var sortedStoreByValue = store
    .OrderBy(item => item.Value)
    .Select(item => item.Key);
```

Then, we can display based on the `Keys` again:

``` csharp
foreach (var key in sortedStoreByValue)
{
    Console.WriteLine($"{key}: {store[key]}");
}
```

