# Exercises

## `id`

Program an `id/1` function (the `/1` means it has arity 1), which should return the same value it takes. It should work with different data types.

## `add`

Program an `add/2` function which returns the sum of its numeric parameters.

## `next`

Program a `next/1` function that returns the next number of its input.

## `double`

Define a `double/1` function that returns the double of the value it takes.

## `gt`

Define a `gt/2` function that indicates if a the first parameter is **g**reater **t**han the second one.

*It shoud work with not only numbers*. Hint: check the `Ord` type, available in `@utils`.

## `isAdult`

Define an `isAdult/1` function that tells if a person (an object with an `age` property) is an adult or not (has at least `18` years).

## `and`

Define an `and/2` function which returns `true` only if both parameters are `true`.

## `not`

Define a `not/1` function which should negate what it receives.

## `max`

Define a `max/2` function which returns the maximum value of the two it receives. Which type of data should it accept?

## `both`

Define a `both/1` function that takes a function `f/2` and returns a function which takes a value and applies it to **both** parameters of `f`. For example:

```typescript
const concat = (x: string, y: string) => x + y;
const concatBoth = both(concat);

expect(concatBoth('hello')).toBe('hellohello');
```

```typescript
const divide = (x: number, y: number) => x / y;
const one = both(divide);

expect(one(40)).toBe(1);
```
