# Student Exercise

```
Student class:
- name (string)
- address (string)
- semester (int)
- gender (enum: Male, Female)

Deny if name is less than or equal to 2 characters
Deny if address is null or empty
Deny if semester is not: 1 <= semester <= 8

Teacher class:
- name (string)
- address (string)
- salary (double)
- gender (enum: Male, Female).
```

Constraints from Student apply here.

Person superclass (put common members like properties and methods inside it from Student and Teacher).


Override `ToString` and `Equals` methods.

Have one constructor to initialize the values (make private set accessors when appropiate).

Document all public parts with /// triple slash comments.

Check out the source code on [GitHub](https://github.com/danielsimionescu/csharp-unittesting-student).