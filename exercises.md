# Basic exercises

## 01. `id`

Program an `id/1` function (the `/1` means it has arity 1), which should return the same value it takes. It should work with different data types.

## 02. `add`

Program an `add/2` function which returns the sum of its numeric parameters.

## 03. `next`

Program a `next/1` function that returns the next number of its input.

## 04. `double`

Define a `double/1` function that returns the double of the value it takes.

## 05. `gt`

Define a `gt/2` function that indicates if a the first parameter is **g**reater **t**han the second one.

*It shoud work with not only numbers*. Hint: check the `Ord` type, available in `@utils`.

## 06. `isAdult`

Define an `isAdult/1` function that tells if a person (an object with an `age` property) is an adult or not (has at least `18` years).

## 07. `and`

Define an `and/2` function which returns `true` only if both parameters are `true`.

## 08. `not`

Define a `not/1` function which should negate what it receives.

## 09. `max`

Define a `max/2` function which returns the maximum value of the two it receives. Which type of data should it accept?

# Higher order function exercises

## 10. `both`

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

## 11. `doubleBoth`

Define the function `doubleBoth/1` which takes a number an returns its double (just like `double/1`). Use the function `both/1` you have done.

## 12. `squareBoth`

Define the function `squareBoth/1` which takes a number an returns its square value. Use the function `both/1` you have done.

## 13. `flip`

Define the `flip/1` function that takes an `f/2` function inverts its parameters' order.

## 14. `flippedConcat`

Define `flippedConcat` function, which receives two strings and returns the concatenation of the second one with the first one. For example: `flippedConcat('hello', 'man') = 'manhello'`.

## 15. `twice`

Define `twice/1` which takes a `f/1` function and returns a function that expects one argument and applies `f` with that value for both parameters. For example:

```typescript
const ask = (x: string) => x + '?';
const seriouslyAsk = twice(ask);
seriouslyAsk('what'); // <- 'what??'
```

_Which is the type of the implied functions?_

## 16. `plusTwo`

Using functions you have already done, define `plusTwo/1`, which takes a number and returns that plus two.

## 17. `quadruple`

Define `quadruple/1`, using `twice`.

## 18. `compose`

Define `compose/2`. It should perform the composition of two function it takes. For example:

```typescript
const head =(x: number[]) => x[0];
const reverse =(x: number[]) => x.slice().reverse();

const last = compose(head, reverse);

last([1, 2, 3, 4])); // <- 4
```

## 19. `doubleOfNext`

Define `doubleOfNext/1`. Use _composition_ and point-free notation.

## 20. `nextOfDouble`

Define `nextOfDouble/1`. Use _composition_ and point-free notation.

# Currification and partial application exercises

## 21. `next` (curry)

Define the function `next/1`, partially applying `add/2` (from `@utils`).

## 22. `double` (curry)

Define the function `double/1`, partially applying `multiply/2` (from `@utils`).

## 23. `at` (curry)

Define the following functions:

- `at/2`: which takes a position and a _list_ of _numbers_ and returns the element of the list at that position. For example:

```typescript
at(2, [1, 2, 3, 4, 5]); // <- 3, as lists are 0-indexed
```

`at`'s firm should be: `(pos: number, list: number[]) => number`.

- `curriedAt/2`: which is just the function `at`, but _curried_. Use the function `curry` from `@utils` for that.
- `head/1`: which takes a _list_ of _numbers_ and returns the first _number_ of that _list_. Use `curriedAt` for that function.

## 24. `twoRaisedAt`

Define `twoRaisedAt/1`. For example:

```typescript
twoRaisedAt(3); // <- 8
```

Use partial application.

## 25. `square` (curry)

Think about the last two exercises and then define a function `square/1` which returns the square of the number it receives, using `flip`, `curry` and `pow`, all from `@utils`.

## 26. `even`

In a similar way than you did before, define a function `even` that gets a _number_ and tells if it is or isn't even. Try using point-free notation and use the functions `compose`, `eq`, `curry`, `flip`, and `mod`, partially applying when necessary.

# Recursivity exercises

## 27. `sum`

Define a function `sum/1` that returns the sum from `1` until that number (assume it will be called only with positive integers).

## 28. `multiply`

Define `multiply/2` which return the product of its arguments. Use recursivity as a sum of `x`, `y` times (suppose the arguments are called `x` and `y`). Assume only positive integer parameters.

## 29. `divide`

Define `divide/2` using recursivity. Assume only positive integer parameters.

## 30. `mod`

Define `mod/2` which returns the _modulus_ of a division, using recursivity. Assume only positive integer parameters.

## 31. `pow`

Define `pow/2` which implements the potence mathematical operation. Use recursivity and assume only integer positive parameters.

## 32. `factorial`

Define a `factorial/1` function which returns the [_factorial_](https://en.wikipedia.org/wiki/Factorial) of a number.

## 33. `fibonacci`

Define a `fibonacci/1` function which returns the [_Fibonacci number_](https://en.wikipedia.org/wiki/Fibonacci_number) of its argument.

# Lists and recursivity

## 34. `length`

Define the function `length/1`, which takes a _list_ and returns its _length_. It's forbidden to directly access `.length` property for this exercise. Use functions `isEmpty`, `tail` and `add` from `@utils` instead.

## 35. `sum`

Define the function `sum/1` which takes a list of numbers and return the sum of all them. Use recursivity.

## 36. `production`

Define de function `production/1` which takes a list of numbers and return the production of all them. Use recursivity.

## 37. `doubles`

Using _recursivity_, define the function `doubles/1` which returns the doubles of a list of numbers.

## 38. `evens`

Define `even/1` which get a list of numbers and returns a list with the _even_ numbers.

## 39. `at`

With _recursivity_, define `at/2` which takes a position and a list and returns the element in the list at that position.

## 40. `maximum`

Define `maximum/1` which returns the maximum of a non-empty numbers list. It may help defining helper functions like `subhead/1` which should return the _second_ element of the list it takes and `subtail/1` which would be _tail of the tail_.

## 41. `some`

Define `some/2` which takes a _predicate_ of `T` and a _list_ of `T`s. Returns `true` if the _predicate_ is truthy for at lest one element of the list.

## 42. `every`

Define `every/2` which takes a _predicate_ of `T` and a _list_ of `T`s. Returns `true` if the _predicate_ is truthy for all the elements of the list.

## 43. `doubles` (with `map`)

Using `map/2` from `@utils` and a version of `double/1` you have already done, define `doubles/1` which takes a _list_ and returns another list with the double of each number. Can you write it in a _point-free style_?

## 44. `map` (recursivity)

Define the function `map/2` which takes a _function_ and a _list_ and transform each _element_ of the _list_ with the _function_.

## 45. `evens` (filter)

Using `filter/2` from `@utils` and a version of `even/1` you have already done, define `evens/1` which takes a _list_ of _numbers_ and returns another _list_ with the _even numbers_ from the first one. Can you write it in a _point-free style_?

## 46. `filter` (recursivity)

Define the function `filter/2` which takes a _predicate_ (a _function_ of _arity_ 1 with a _boolean output_) and a _list_ and returns a list with the _elements_ that conform with the _predicate_.

# Reduce

## 47. `sum`

Using `reduce/3` from `@utils`, define `sum/1` which returns the sum of the _numbers list_ it takes. Can you write it _point-free style_?

## 48. `production`

Using `reduce/3` from `@utils`, define `production/1` which returns the production of the _numbers list_ it takes. Can you write it _point-free style_?

## 49. `maximum`

Using `reduce/3` from `@utils`, define `maximum/1` which returns the greater element from a list. Can you write it _point-free style_?

## 50. `length`

Using `reduce/3` from `@utils` and _partial application_, define `length/1` which returns the _length_ of a list. Can you write it _point-free style_?

## 51. `some`

Using `reduce/3` from `@utils`, define `some/2` which takes a _predicate_ and a _list_ and return `true` if at least one _element_ from the _list_ conforms with the _predicate_.

## 52. Partial `every`

You have already done `some/2` using `reduce/3` and you have also done `every/2` using _recursivity_. I bet you can guess how to define `some/2` using `reduce/3`. But, can you do `partialEvery/1` (pay special attention to the arity) which returns a _function_ that expects the list, **using `compose` and _point free style_**?

## 53. `reduce` (recursivity)

Ok, now that you are familiar with `reduce/3`, try implementing it, using _recurisity_.

## 54. `map` (reduce)

`map/2` can be defined using `reduce/3`. Can you do it?

## 55. `filter` (reduce)

`filter/2` can be defined using `reduce/3`. Can you do it?

# Integration exercises

## 56. `equalLists`

Define a function `equalLists/2` that tells us if two lists (of _numbers_, _booleans_ or _strings_) are equal. You may use _recursivity_ for that. Why this wouldn't work for _lists_ of _lists_?

## 57. `reverse`

Define the function `reverse/1` which recives a list and returns the list in reverse order.

## 58. `palindrome`

Using _functions_ you have already defined, define `palindrome/1` which tells if the _list_ it takes is read equally back and forth.

## 59. `zipWith`

Define `zipWith/3` which takes a _function_ (`<A, B, C> (x: A, y: B) => C`) and two _lists_ (`A[]` and `B[]`) and returns another list (`C[]`) resulting of applying the _function_ to the _lists_.

## 60. `relationAccomplishedForAll`

Define `relationAccomplishedForAll/1` which takes a _binary predicate_ and could be used for creating `equalLists/2` like `const equalLists = relationAccomplishedForAll(eq)`.

## 61. `curry`

Define `curry/1` which takes a _binary function_ `f` and returns its _curried_ version (an _unary function_ that returns another _unary function_ that returns the result).
