# ArrayList

Let's talk about the `ArrayList` class for a moment. 

You remember that we said: an array cannot change its size. Right? (immutability)

This is what the `ArrayList` brings to the **table**: the ability to dynamically `resize` arrays.

By resizing I mean to `add` and `remove` items as you need without being restricted by a capacity/size.

## How it works?
> As elements are added to an `ArrayList`, the capacity is automatically increased as required through reallocation [MSDN](https://msdn.microsoft.com/en-us/library/system.collections.arraylist(v=vs.110).aspx#Anchor_6)

``` csharp
var arrList = new ArrayList();
arrList.Add(12);
arrList.Add("pudding");
arrList.Add(true);
```
As you can see, we can have items of different types (`non-generic` collection).

## Practical

But should you use it? Well, **nope**.

![Nope](https://media.giphy.com/media/l44QoAtMOGDhYjjVu/giphy.gif)

The `ArrayList` doesn't provide the best `performance`. 

Also, being **Non-generic**, we have the issue with **Boxing and Unboxing** (which I will cover soon). 

It is recommended to use the `List` collection for **Generics** or the `List<Object>`  when you need a **heterogeneous** collection :fearful: (it means a collection which can hold items of different types – like strings, integers, Objects at the same time). :slightly_smiling_face:

## Conclusion

::: tip
Still, the `ArrayList` is there for you as any other features of the C# language. 

If you come across a situation when you think it make sense to use an `ArrayList`, go ahead and use it, but make sure you are aware of any **performance issues** that it might cause. :fire:
:::

