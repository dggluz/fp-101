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

## `even`

In a similar way than you did before, define a function `even` that gets a _number_ and tells if it is or isn't even. Try using point-free notation and use the functions `compose`, `eq`, `curry`, `flip`, and `mod`, partially applying when necessary.

# Recursivity exercises

## `sum`

Define a function `sum/1` that returns the sum from `1` until that number (assume it will be called only with positive integers).

## `multiply`

Define `multiply/2` which return the product of its arguments. Use recursivity as a sum of `x`, `y` times (suppose the arguments are called `x` and `y`). Assume only positive integer parameters.

## `divide`

Define `divide/2` using recursivity. Assume only positive integer parameters.

## `mod`

Define `mod/2` which returns the _modulus_ of a division, using recursivity. Assume only positive integer parameters.

## `pow`

Define `pow/2` which implements the potence mathematical operation. Use recursivity and assume only integer positive parameters.

## `factorial`

Define a `factorial/1` function which returns the [_factorial_](https://en.wikipedia.org/wiki/Factorial) of a number.

## `fibonacci`

Define a `fibonacci/1` function which returns the [_Fibonacci number_](https://en.wikipedia.org/wiki/Fibonacci_number) of its argument.

# Lists and recursivity

## `length`

Define the function `length/1`, which takes a _list_ and returns its _length_. It's forbidden to directly access `.length` property for this exercise. Use functions `isEmpty`, `tail` and `add` from `@utils` instead.

## `sum`

Define the function `sum/1` which takes a list of numbers and return the sum of all them. Use recursivity.

## `production`

Define de function `production/1` which takes a list of numbers and return the production of all them. Use recursivity.

## `doubles`

Using _recursivity_, define the function `doubles/1` which returns the doubles of a list of numbers.

## `evens`

Define `even/1` which get a list of numbers and returns a list with the _even_ numbers.

## `at`

With _recursivity_, define `at/2` which takes a position and a list and returns the element in the list at that position.

## `maximum`

Define `maximum/1` which returns the maximum of a non-empty numbers list. It may help defining helper functions like `subhead/1` which should return the _second_ element of the list it takes and `subtail/1` which would be _tail of the tail_.

## `some`

Define `some/2` which takes a _predicate_ of `T` and a _list_ of `T`s. Returns `true` if the _predicate_ is truthy for at lest one element of the list.

## `every`

Define `every/2` which takes a _predicate_ of `T` and a _list_ of `T`s. Returns `true` if the _predicate_ is truthy for all the elements of the list.

## `doubles` (with `map`)

Using `map/2` from `@utils` and a version of `double/1` you have already done, define `doubles/1` which takes a _list_ and returns another list with the double of each number. Can you write it in a _point-free style_?

## `map` (recursivity)

Define the function `map/2` which takes a _function_ and a _list_ and transform each _element_ of the _list_ with the _function_.

## `evens` (filter)

Using `filter/2` from `@utils` and a version of `even/1` you have already done, define `evens/1` which takes a _list_ of _numbers_ and returns another _list_ with the _even numbers_ from the first one. Can you write it in a _point-free style_?

## `filter` (recursivity)

Define the function `filter/2` which takes a _predicate_ (a _function_ of _arity_ 1 with a _boolean output_) and a _list_ and returns a list with the _elements_ that conform with the _predicate_.

# Reduce

## `sum`

Using `reduce/3` from `@utils`, define `sum/1` which returns the sum of the _numbers list_ it takes. Can you write it _point-free style_?

## `production`

Using `reduce/3` from `@utils`, define `production/1` which returns the production of the _numbers list_ it takes. Can you write it _point-free style_?
