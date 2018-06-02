# Queues

Let's say that we are at a pharmacy and each customer gets a ticket of order.

### Order class

We begin by creating an `Order` class:

``` csharp
internal class Order
{
    public DateTime Time { get; set; }

    public int Number { get; set; }
}
```

Then, we can create an `orders` queue:

``` csharp
var orders = new Queue<Order>();
```

We can create an extension method to add orders:

``` csharp
internal static class OrdersExtension
{
    private static int _orderNumber;

    public static void AddOrder(this Queue<Order> orders)
    {
        orders.Enqueue(new Order { Time = DateTime.Now, Number = _orderNumber++ });
    }
}
```

Let's try to add `10` orders:

``` csharp
for (int i = 0; i <= 10; i++)
{
    orders.AddOrder();
    Thread.Sleep(100);
}
```


Let's print the orders:

``` csharp
foreach (var order in orders)
{
    Console.WriteLine(order);
}
```

Also, we need to override the `ToString` method to print something more meaningful :D

``` csharp
public override string ToString()
{
    return $"{CustomerName} at {Time.ToLongTimeString()} ";
}
```

And this is the result:
```
100 at 11:51:21 AM
101 at 11:51:21 AM
102 at 11:51:21 AM
103 at 11:51:22 AM
104 at 11:51:22 AM
105 at 11:51:22 AM
106 at 11:51:22 AM
107 at 11:51:22 AM
108 at 11:51:22 AM
109 at 11:51:22 AM
110 at 11:51:22 AM
```

When a customer gets the products, we can call this:
```
orders.Dequeue();
```

And we are sure that it removes the first entry.


