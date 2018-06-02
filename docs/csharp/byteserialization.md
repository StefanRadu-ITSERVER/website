# Binary serialization

Let's implement some serialization.

We are going to convert **integers** to **bytes**.

So, let's serialize some bytes to a file:

We start by creating a `FileStream`

``` cs
using (var fileStream = new FileStream("data", FileMode.Create))

}
```

This `data` file will be created in the `bin\Debug` folder of the project.

Now, let's write some bytes to the file:

``` csharp
using (var fileStream = new FileStream("data", FileMode.Create))
{
    for (var i = 1; i <= 20; i++)
    {
        fileStream.WriteByte((byte)i);
    }
}
```

And the file shows this content: 

```
	


```

Well, yes... :satisfied:

Now, let's try to read the bytes from the file.

Firstly, we need to set the beginning of the file:

``` cs
fileStream.Seek(0, SeekOrigin.Begin);
```

Then, we can use a `for` loop to read the bytes one by one again:

``` cs
for (var i = 0; i < fileStream.Length; i++)
{
    var number = fileStream.ReadByte();
    Console.WriteLine(number);
}
```

This is the whole code:

``` cs
using (var fileStream = new FileStream("data", FileMode.Create))
{
    // writing
    for (var i = 1; i <= 20; i++)
    {
        fileStream.WriteByte((byte)i);
    }


    // reading
    fileStream.Seek(0, SeekOrigin.Begin);
    
    for (var i = 0; i < fileStream.Length; i++)
    {
        var number = fileStream.ReadByte();
        Console.WriteLine(number);
    }
}
```

Of course, you would have separated these in two functions, creating an array etc. But this is just to show how to serialize integers to bytes. :D
