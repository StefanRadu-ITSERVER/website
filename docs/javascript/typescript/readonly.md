# Readonly Properties

I am going to create a `Report` interface which has two properties `createdOn` and `type`:

``` ts
interface Report {
  createdOn: Date;
  type: string;
};
```

Now, let's create a report based on this interface:

``` ts
let htmlReport : Report = {
  createdOn: new Date(),
  type: 'HTML'
};

console.log(htmlReport);
```

Right now, we can change any any time the value of its properties:

``` ts
htmlReport.type = 'PDF';
```

But, maybe we don't want to be able to change its properties.

In this case, we need to use `readonly`:

``` ts
interface Report {
  readonly createdOn: Date;
  readonly type: string;
};
```

And this time, when we try to change the value, we get an error:

``` ts
htmlReport.type = 'PDF'; // error
```

::: tip Immutable properties
So, after you initialize an object, you can't change its readoly properties.
:::

And this is the idea of TypeScript: to have a safer environment to code in. 
Whenever you do something wrong, the TypeScript engine warns you by making errors appear.

## Other point

Now, I want to show you something else.

Here is all the code that we have written.

``` ts
interface Report {
  readonly createdOn: Date;
  readonly type: string;
};

let htmlReport : Report = {
  createdOn: new Date(),
  type: 'HTML'
};

console.log(htmlReport);
```

When it's transpiled, this is the JavaScript version:

``` js
"use strict";
;
var htmlReport = {
    createdOn: new Date(),
    type: 'HTML'
};
console.log(htmlReport);
```

And this is the idea: using TypeScript we are helped by having a type-safe environment, but at the cost of writing more rigid code (in my point of view).

You can see that we need to be specific about what properties a `Report` has and their type.

This is a relatively shallow difference, but this is how writting code with a **typed language** and a **dynamic language** looks like.
