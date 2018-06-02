# String Literals

There are same **sequences** that you can insert inside strings to create a new line, or to add a tab. 

These are: `\n`, `\t`, `\r`, `\\` etc.

``` csharp
string columns = "Column 1\tColumn 2\tColumn 3";
string rows = "Row 1\nRow 2\nRow 3";

Console.WriteLine(columns);
Console.WriteLine(rows);
```

These are also called **escape characters**.

## Multiline Strings

To create a multiline string, we can use the **verbatim operator** `@`:

``` csharp
var text = @"This is a text
on multiple
lines";
```

Also, we can use this to not repeat ourselves when we want to insert backslash characters, or quotes in strings.

So, we can write:

``` csharp
string filePath = @"C:\Users\Public\Documents";
```

instead of:

``` csharp
string filePath = "C:\\Users\\Public\\Documents";
```

This operator is very convenient. :wink:
