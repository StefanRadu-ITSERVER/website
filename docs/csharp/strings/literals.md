
### String literals
Tehre are same sequences that you can insert inside strings to create a new line, or to add a tab. These are: \n, \t, \r, \\ etc.

``` csharp
string columns = "Column 1\tColumn 2\tColumn 3";
string rows = "Row 1\nRow 2\nRow 3";

Console.WriteLine(columns);
Console.WriteLine(rows);
```

These are also called **escape characters**.



How to create a multiline string?
--- copied

 Use verbatim strings for convenience and better readability when the string text contains backslash characters, for example in file paths. Because verbatim strings preserve new line characters as part of the string text, they can be used to initialize multiline strings. Use double quotation marks to embed a quotation mark inside a verbatim string. The following example shows some common uses for verbatim strings:
C#

string filePath = @"C:\Users\scoleridge\Documents\";
//Output: C:\Users\scoleridge\Documents\

string text = @"My pensive SARA ! thy soft cheek reclined
    Thus on mine arm, most soothing sweet it is
    To sit beside our Cot,...";
/* Output:
My pensive SARA ! thy soft cheek reclined
   Thus on mine arm, most soothing sweet it is
   To sit beside our Cot,... 
*/

string quote = @"Her name was ""Sara.""";
//Output: Her name was "Sara."

--- copied





