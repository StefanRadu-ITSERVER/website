# Inheritance

Let's create a simple `Person` class with three properties:
- name
- gender
- age

And a method called `greet` to print a greeting.

``` js
class Person {
  constructor (name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  greet () {
    console.log(`Hi, I am ${this.name}!`)
  }
}
```

::: tip Class names
Remember to capitalize class names.
:::

If you come from a language like C#, you might ask: where are the properties defined?

Well, because JavaScript is a dynamic language, we can just use `this.` and come up with a property name.

Now, we can define a subclass called `Teacher` which inherits from `Person`:

``` js
class Teacher extends Person {
  constructor (name, gender, age) {
    super (name, gender, age);
  }
}
```

::: tip Extending
Now, the `Teacher` class has all the functionality of the `Person` class.
:::

I can create two instances of these types:

``` js
var daniel = new Teacher('Daniel', 'male', 21);
var erik = new Person('Erik', 'male', 19);
daniel.greet();
erik.greet();
```

::: tip Reusability
Number one reason why we would opt for Object-Oriented is reusability: we define a class once and then we can create multiple instances.
:::

