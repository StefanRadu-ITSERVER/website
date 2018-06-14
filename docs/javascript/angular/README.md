# Angular

::: warning Disclaimer
It gets overwhelming quickly when trying to explain Angular from an abstract point of view. By this I mean to explain how it works before showing what it does.

This is a brief introduction to Angular, just enough to give us an idea of what it is. :wink:
:::

## When to use Angular?
Angular is used for **complex** client side applications.

## Why to use Angular?
The idea of using frameworks in general, and Angular in particular, is to switch the focus from building all the **plumming/glue code** to your own **business logic** (things that offer value to your clients).

So, you spend **less** time worrying about coding all the general **features** (functionality), and concentrate on implementing the **requirements**.

### Static and Dynamic

The more dynamic your website needs to be, the more time consuming it becomes to implement it.

This **dynamic** facet is determined by interactivity (modals, pop-outs etc.), forms which can easily be achieved through Angular Features like: Data Binding, Component Model etc.

## Angular Features
- Dependency Injection
- Component Model
- Change Detection
- Templates
- Routing
- State Management
- Validation
- HTTP Requests
- Data Binding


## How does Angular work?

Angular was build in mind to be modular (to offer modularity – a code is modular if it's split into multiple pieces which can be added together in various ways).

So, the architecture of Angular (how it's built) is made of components. These allow you to **reuse** components in different parts of your application (for instance: you need a Modal Dialog in multiple pages). This modularity is backed by Dependency Injection.

This component not only has the UI part (how it looks like – HTML + CSS), but also functionality (how it works / what it does – JavaScript).

## How to write Angular?

We don't write Angular. This is a framework. We write TypeScript which is a superset of JavaScript.

The idea of TypeScript is to offer you an environment which is type-safe in order to reduce bugs, increase productivity and write better code (but not in all cases though).

So, in contrast to writing JavaScript, with TypeScript we can talk about:
- Decorators
- Modules
- Classes
- Type Annotations
