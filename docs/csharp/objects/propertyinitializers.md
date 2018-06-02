# Property initializers

From now on, you don't need to initialize properties in the constructor if those specific properties are not dependent on arguments passed to the construtor.

Let's say we have a `ShoppingCart` class which has a list of items.

``` csharp
public class ShoppingCart
{
    public List<Item> Items { get; set; }
}

public class Item
{

}
```

Now, the `Items` list is null (points to nothing). If we try, for example, to create a `ShoppingCart` instance and add something to the list, we will get an exception: `NullReferenceException`

``` csharp
var shoppingCart = new ShoppingCart();
shoppingCart.Items.Add(new Item());
```

Again, because the list was not initialized, meaning it wasn't set to anything.

We need to initialize it.

We could have done this through the `constructor` of the class, like so:

``` csharp
public class ShoppingCart
{
    public List<Item> Items { get; set; }

    public ShoppingCart()
    {
        Items = new List<Item>();
    }
}
```

But now, we can use **property initializers**:

``` csharp
public class ShoppingCart
{
    public List<Item> Items { get; set; } = new List<Item>();
}
```

Let's add an `Added` date for the `Item` class and set it to now as a property initializer:

``` csharp
public class Item
{
    public DateTime Added { get; } = DateTime.Now;
}
```

The same principle applies here, also when there is only a `get` accessor (this property cannot be changed after the instance was created – readonly).

``` csharp
var item = new Item();
item.Added = DateTime.Now; // this is an error
```

But, we can change it when we create it only through a constructor:

``` csharp
public Item(DateTime added)
{
    Added = added;
}
```

And here we pass the value:

``` csharp
var item = new Item(DateTime.Now);
```
