# JSON Serializer

We need to install a **NuGet** package called: **Newtonsoft.Json**.

Let's create a variable phone with some properties:

``` csharp
var phone = new Phone
{
    Manufacturer = "Apple",
    Model = "iPhone X",
    Price = 1200.00
};
```

Then, press `Ctrl` and `.` on the `Phone` class to generate it.

``` csharp
internal class Phone
{
    public string Manufacturer { get; set; }
    public string Model { get; set; }
    public double Price { get; set; }
}
```

Now, we can try to serialize this object into a JSON string:

``` csharp
var phoneAsJsonString = JsonConvert.SerializeObject(phone);
```

::: tip JSON
JSON stands for JavaScript Object Notation.
:::

Press same keys on `JsonConvert` to add the `using` statement.

Let's print it to the console and see what we get:

``` csharp
Console.WriteLine(phoneAsJsonString);
```

And the result is:

``` json
{"Manufacturer":"Apple","Model":"iPhone X","Price":1200.0}
```

Cool! This is the object serialized into JSON.

We have the option to indent the code to be displayed more nicely:

``` csharp
var phoneAsJsonString = JsonConvert.SerializeObject(phone, Formatting.Indented);
Console.WriteLine(phoneAsJsonString);
```

Now, this prints:

``` json
{
  "Manufacturer": "Apple",
  "Model": "iPhone X",
  "Price": 1200.0
}
```

Which is indeed more readable for us :clap:

As you can see the format is lightweight and easy to interchange between different systems.

Also, if you are familiar with JavaScript, this is the same notation for JS objects.

::: tip
This JSON string can be stored in a file, a database or sent and received by a Web Application (REST) through HTTP Requests. So, many use cases.
:::

Now, we can do the opposite: because we **serialized** our object into a JSON string, we can **deserialize** it into an object again.

``` csharp
var phoneDeserialized = JsonConvert.DeserializeObject<Phone>(phoneAsJsonString);
Console.WriteLine(phoneDeserialized);
```

Two simple things to consider here:
1. notice that we need to specify the type of the object (in our case `<Phone>`)
2. it prints the qualified name (the name of the class). We need to override the `ToString` method if we want to print its properties instead of its class name.

So, let's override the `ToString` method to print something more... meaningful, I guess :grinning:

``` csharp
public override string ToString()
{
    return $"{Manufacturer} {Model} ${Price}";
}
```

This prints:

```
Apple iPhone X $1200
```

<!-- And let me show you what I mean with the **parameterless constructor**.

Let's generate a constructor with parameters: press `Ctrl` + `.` on the `Phone` class, select *Generate constructors...*, and hit *OK*.

Now, first of all, we cannot instantiate the phone as we did before:

``` csharp
var phone = new Phone
{
    Manufacturer = "Apple",
    Model = "iPhone X",
    Price = 1200.00
};
```

So, instead of this **object initializer**, let's use the constructor:

``` csharp
var phone = new Phone("Apple", "iPhone X", 1200.00);
```

We can run now the code: -->

Also, there is another serializer which is used internally by .NET called `JavaScriptSerializer`.

Even Microsoft recommends developers to use the **Newtonsoft.Json** NuGet package. It's way faster, easier to use etc.

::: tip Remember
When you **read in** is called serialize.
Wehn you **write out** is called deserialize.
:::

You can find the source code on [GitHub](https://github.com/danielsimionescu/csharp-jsonserializer)

## Data Persistency

We are going to see how to use this JSON serializer to persist data locally in a file.

It's very simple :relaxed:

First, let's write the **JSON string** to a file called `Phone.json`:

``` csharp
File.WriteAllText("Phone.json", phoneAsJsonString);
```

By default, this file is created in the `bin/Debug` folder. To find it, you need to right click on the project and open it in File Explorer. There, you can see the folder.

Now, let's read the file and use the string from the file to deserialize the `Phone` object:

``` csharp
var phoneStringFromFile = File.ReadAllText("Phone.json");

var phoneDeserialized = JsonConvert.DeserializeObject<Phone>(phoneStringFromFile);
Console.WriteLine(phoneDeserialized);
```

::: warning XML
But what about XML?

Well, XML is indeed used for similar things being a data formatting language. But, in XML you have a lot of opening and closing tags (as in HTML) which really bloat the string out (verbose format).

With mobile devices, we need to be concerned about the size of the string because this is sent back and forth which can really increase the amount of data traffic.
:::

You can find the source code on [GitHub](https://github.com/danielsimionescu/csharp-jsonserializer)
