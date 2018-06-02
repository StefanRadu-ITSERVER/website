

We are going to create a simple method which prints a message to the console:

``` cs
public static void PrintMessage()
{
    Console.WriteLine("Method was called");
}
```

One by one, I am going to show you how to call this method.

1. by a simple **method call**:

``` cs
PrintMessage();
```

2. by using an **action**:

``` cs
var action = new Action(PrintMessage);
action.Invoke();
```

This action points to the method that we want to call.

Notice that we don't need to use parantheses `()` on the method, only the name.

And we need to call `Invoke` on the action, otherwise it stays there doing nothing :unamused:

3. by using a **task** and an **action**:

``` cs
var action = new Action(PrintMessage);
var task = new Task(action);
task.Start();
```

This time, we pass the action to the task, and we call `Start` on the task (this method explicitely starts the task).

::: warning
We are unable to pass parameters when calling method when using **actions**.
:::

::: danger
Don't forget to include: `using System.Threading.Tasks;`
:::


4. by passing a the method directly to a **task**:

``` cs
var task = new Task(PrintMessage);
task.Start();
```

This works because the `PrintMessage` method doesn't have any parameters.

If it has, then we need to use a **Lambda expression**:

``` cs
var task = new Task(() => PrintMessage("I need a message"));
task.Start();
```

Whenever you are creating a new task and call `Start` on it, the runtime spins up a new thread of execution. In our case, we have two threads of execution which are separated from each other.

## Importance of tasks

Why should we care about creating tasks?
Well, the GUI (Graphical User Interface) remains responsive while this method is running.


So, you can fix an unresposive GUI in two ways:
1. with tasks
2. with asynchronous programming


Another reason is that the performance of the computer will increase.



... read this

Also the performance of the computer will increase drastically if we use more t tasksfor the execution.

We need to make use of all the cores a computer has and we need to avoid to create an app that executes in a sibge thread.

The execution should be divided in tasks which will take place in different threads of execution.

By doing this not only the app will not freeze/ become un-responsive, but will increase the perfomance and reduce the time of execution.

...




This line of code helps us to simulate a **latency** (caused by the network, database).

``` cs
Thread.Sleep(1000);
```




