# Functions

We need to see how to create some functions in TypeScript :)

## any type

If you don't want to set a type for your variable, then you can use `any`, but this is not prefered because you lose type checking for it.

This is similar to `Object` or `dynamic` in C#.

## string parameters

``` ts
function printMessage (message: string): void {
  console.log(message);
}

printMessage('Hi, there!');
```

## number parameters

``` ts
function add (number1: number, number2: number): number {
  let sum = number1 + number2;
  return sum;
}

let result = add(34, 23);
console.log(result); // 57
```

In TypeScript, numbers are of type `number` unlike in C# where we have `int`, `float`, `double` etc.

## boolean parameters

``` ts
function needRest(answer: Boolean): string {
  return answer ? 'Yes' : 'No';
}
```

``` ts
let result = needRest(true);
console.log(result); // Yes
```

## enum paramters

``` ts
enum State {
  tired,
  fresh
}

function needRest(state: State): string {
  switch (state) {
    case State.tired:
      return 'Yes';      
  
    case State.fresh:
      return 'No';

    default:
      return 'Maybe';
  }
}

let result = needRest(State.fresh);
console.log(result);
```


