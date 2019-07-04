# Rules

The following rules should enforce a _functional_ programming style.

## Do not assign values to variables

It's forbidden to assign values to variables, with only one exception: assigning functions to variables (e.g.: `const id = x => x;`).

It's completely forbidden to override a variable (use only `const`, not `let` nor `var`).

## Avoid flow control statements

Statements like `if`, `if ... else`, `if ... else if`, `while`, `for`, `switch` are completely forbidden. The only "_exception_" is the ternary operator (`? :`) as it is not really a control flow statement but an _expression_.

## Avoid _objects_

It is a functional programming exercise guide. Do not use `this`, `class`, `prototype` nor constructor _functions_. If we used _objects_ it would be as a key-value store instead of as in the OOP sense.

## Use only arrow functions with concise body

Use **only** `(...) => ...` syntax, without block body (brackets).

## When possible, avoid using operators

The exercises will progressevely abandon the "_operators_" (`+`, `*`, `===`, `>`, `.`, `[...]`, etc.). Prefer `@utils`' functions instead.
