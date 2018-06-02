# Dictionaries

If you need to look up data often, and there is a natural key for the data.

The Dictionary is based on a hash table, that means it uses a hash lookup, which is a rather efficient algorithm to look up things, on the other hand, a list you have to go element by element until it finds the result from beginning to the result each time.

A hash table is used when you need to access elements by using key, and you can identify a useful key value. Each item in the hash table is a key/value pair. The key is used to access the items in the collection.

The Dictionary class allows us to store a Key-Value relationship.
You can access data immediately with the key corresponding to the object.
In contrast with lists whose manner of sorting is quite complicated because in lists you have to search step by step and in result we have code perfomance issues.

Key in a Dictionary should not be null, but a value can be.
Key is String (CPR)    -    for CPR, or ID or ISBN is really hard to use lists because they are inefficient and they need to go through every part of the list in order to find what is needed. Specific key can only appear once in any dictionary (Uniquely Identifier).


The Dictionary class is particularly useful. 
* It gives you a way of associating unique individual Keys with Values.
* Keys and Values can be pretty much anything, integers, strings, even objects.
* The Dictionary maintains a one-to-one mapping of a Key 
* to an associated Value, and prevents another Key 
* with the same ID from being added.
* You can see that each of the Keys is unique, but Values don't have to be.
* Like the other Collection objects, 
* the Dictionary has certain important Properties and Methods:
* count - the number of key/value pairs in the dictionary
* clear - clears the dictionary of all the items
* contains - determines if the dictionary contains the given key
* peek - determines if the dictionary contains the given value
* enqueue - adds a new key/value pair; throws exception if key exists
* dequeue - removes teh value with the given key.

Dictionaries are a very commonly-used programming structure in real-world applications