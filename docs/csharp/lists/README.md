# Lists

Consider rephrasing this and insert this theory in examples.


The lists are opposite to arrays. They are resizable. 
Array are useful, but they are old school in their style: 

- fixed-size – or manually resizing, 
- not much help in common tasks – insertion, search etc. 


The .NET Framework Class Library – which is a large set of predefined classes available to the programmer – provides a number of classes for handling collections of objects (so-called collection classes), which provide methods for these tasks.

We have many methods available for us (Add, Clear, Remove,…).
One of the simplest of these collection classes is the List class.

We can now call various methods on the List object, like: Add Clear Contains Count Remove…

The List class is a significant improvement of old-school arrays, but some tasks are difficult.
• By definition List is same to array but different from functionality wise.
• The .NET Framework has a bunch of collection classes that handle all of those nasty issues that come up when you add and remove arrays elements. 
• List class is a collection and defined in the System.Collections. Generic namespace and it provides the methods and properties like other Collection classes such as add, insert, remove, search etc.
• The C# List < T > class represents a strongly typed list of objects that can be accessed by index [ ] and it supports storing values of a specific type without casting to or from object.

Lists shrink and grow dinamically

With arrays you are a lot more limited. You need to set the size of the array when you create it, and any logic that will need to be perfomed on it will need to be written on your own.