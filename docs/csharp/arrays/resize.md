### `Array.Resize()` method
There is a method called `Array.Resize` which might do what it expresses through its name: to resize (change the **size**) of the array. But we said that arrays are **immutable** :fearful:. 


Well, this statement still holds true. What the `Resize` method does is that it creates a new array in the background and reassigns it to the initial array. So, it's not changing the array. 

Is this a **perfomance** issue? Certainly!

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


But let's see how it works. 

I want to remove half of the items for the array:

``` csharp
Array.Resize(ref fruits, 2);
Console.WriteLine(fruits.Length); // 2
```

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


> The Resize method allocates a new array with the specified size, copies elements from the old array to the new one, and then replaces the old array with the new one.

You can read it for youself [here](https://msdn.microsoft.com/en-us/library/bb348051(v=vs.110).aspx#Anchor_2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


::: warning Passed by Reference
To change variable values with methods, you can either take in a variable and return a new value, or you pass it by reference `ref` to the method and inside the method, that variable gets changed and you don't need to return any value.
:::