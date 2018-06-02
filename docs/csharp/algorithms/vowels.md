# Eliminate Vowels

Let's remove the vowels from words

We can create a word and then a function to remove the vowels:

``` csharp
var word = "abstraction";
var result = RemoveVowels(word);
Console.WriteLine(result);
```

Procedural way

``` csharp
public static string RemoveVowels(string str)
{
    var result = new StringBuilder();
    var vowels = "aeiouAEIOU";

    foreach (var letter in str)
    {
        if (!vowels.Contains(letter))
        {
            result.Append(letter);
        }
    }

    return result.ToString();            
}
```

Here, we use the `StringBuilder` class to increase code performance.

And the above code returns:

```
bstrctn
```

More functional way

``` csharp
public static string RemoveVowels(string str)
{
    var vowels = "aeiouAEIOU";

    var consonants = str
        .Where(letter => !vowels.Contains(letter));

    return string.Join(string.Empty, consonants);          
}
```

Which returns the same result.
