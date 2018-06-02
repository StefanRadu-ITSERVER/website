# Filters

We can filter exception based on certain conditions.

In this example, I am showing you how to throw an exception only when an Excell file is not found:

``` csharp
try
{
    var content = File.ReadAllText(file);
    return content;
}
catch (FileNotFoundException ex) when (ex.FileName.EndsWith(".xls"))
{
    throw;
}
```

For other file types, this exception is not thrown.
