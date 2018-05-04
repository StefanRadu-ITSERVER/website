---
title: ArrayList
---

### ArrayList

Now we need to talk about the ArrayList for a moment. You remember that we said: an array cannot change its size. Right? 
<br>
This is what the ArrayList brings to the **table**: the ability to dynamically resize the array.

![Table](https://media.giphy.com/media/3o7qDXpK3z7h4sUWfS/giphy.gif)


By resizing I am to add and remove items as you need without being stricted by a capacity.

> As elements are added to an ArrayList, the capacity is automatically increased as required through reallocation [read](https://msdn.microsoft.com/en-us/library/system.collections.arraylist(v=vs.110).aspx#Anchor_6)

``` csharp
var arrList = new ArrayList();
arrList.Add(12);
arrList.Add("pudding");
```
As you can see, we can have items of different types (non-generic collection).

But should you use it? Well, **nope**.

![Nope](https://media.giphy.com/media/l44QoAtMOGDhYjjVu/giphy.gif)

The `ArrayList` doesn't provide the best performance. Also, being Non-generic, we have the issue with Boxing and Unboxing (which I will cover soon). It is recommended to use the `List` collection for Generics or the `List Object`  when you need a **heterogeneous** collection :fearful: (it means a list which can hold items of different types – strings, integers, Objects at the same time). :slightly_smiling_face:

::: tip
But still, it's there for you as any other feature of the language. If you come across a situation when you think it make sense to use an `ArrayList` for example, go ahead and use it, but make sure you are aware of any performance issue that it might cause.
:::
