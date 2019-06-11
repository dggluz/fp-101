# Basic exercises

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

# Higher order function exercises

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

_Which type should have the functions?_

## `doubleBoth`

Define the function `doubleBoth/1` which takes a number an returns its double (just like `double/1`). Use the function `both/1` you have done.

## `squareBoth`

Define the function `squareBoth/1` which takes a number an returns its square value. Use the function `both/1` you have done.

## `flip`

Define the `flip/1` function that takes an `f/2` function inverts its parameters' order.

## `flippedConcat`

Define `flippedConcat` function, which receives two strings and returns the concatenation of the second one with the first one. For example: `flippedConcat('hello', 'man') = 'manhello'`.

## `twice`

Define `twice/2` which takes a `f/2` function and returns a function that expects one argument and applies `f` with that value for both parameters. For example:

```typescript
const ask = (x: string) => x + '?';
const seriouslyAsk = twice(ask);
seriouslyAsk('what'); // <- 'what??'
```

_Which is the type of the implied functions?_

## `plusTwo`

Using functions you have already done, define `plusTwo/1`, which takes a number and returns that plus two.

## `quadruple`

Define `quadruple/1`, using `twice`.

## `compose`

Define `compose/2`. It should perform the composition of two function it takes. For example:

```typescript
const head =(x: number[]) => x[0];
const reverse =(x: number[]) => x.slice().reverse();

const last = compose(head, reverse);

last([1, 2, 3, 4])); // <- 4
```

## `doubleOfNext`

Define `doubleOfNext/1`. Use _composition_ and point-free notation.

## `nextOfDouble`

Define `nextOfDouble/1`. Use _composition_ and point-free notation.

# Currification and partial application exercises

## `next` (curry)

Define the function `next/1`, partially applying `add/2` (from `@utils`).

## `double` (curry)

Define the function `double/1`, partially applying `multiply/2` (from `@utils`).

## `at` (curry)

Define the following functions:

- `at/2`: which takes a position and a _list_ of _numbers_ and returns the element of the list at that position. For example:

```typescript
at(2, [1, 2, 3, 4, 5]); // <- 3, as lists are 0-indexed
```

`at`'s firm should be: `(pos: number, list: number[]) => number`.

- `curriedAt/2`: which is just the function `at`, but _curried_. Use the function `curry` from `@utils` for that.
- `head/1`: which takes a _list_ of _numbers_ and returns the first _number_ of that _list_. Use `curriedAt` for that function.

## `twoRaisedAt`

Define `twoRaisedAt/1`. For example:

```typescript
twoRaisedAt(3); // <- 8
```

Use partial application.

## `square` (curry)

Think about the last two exercises and then define a function `square/1` which returns the square of the number it receives, using `flip`, `curry` and `pow`, all from `@utils`.
