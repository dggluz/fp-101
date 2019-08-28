# TypeScript/JavaScript functional 101

The aim of this repository is to help you **get used to the functional programming style**. It is a collection of exercises, with automatic tests that will check your solutions. **It does not explain functional concepts**. It is also introductory, so advanced topics won't be covered.

The exercises can be solved using **TypeScript** or **JavaScript** (but I strongly recommend you to use TypeScript).

**You will find the exercises [here](./exercises.md).**

## Is this guide for me?

If you want to start with functional programming and you know at least a little bit of JavaScript or TypeScript, then yes!

## Setup

* Clone [this repository](https://github.com/dggluz/fp-101).
* Open the directory with your code editor (project settings for [Visual Studio Code](https://code.visualstudio.com/) are included).
* Install the dependencies (`npm i` in the console).
* [Run the tests](#running-the-tests).
* [Solve the exercises](#solving-the-exercises) [following the rules](#following-the-rules).

## Running the tests

You can run all the tests with `npm t` or run an utilitary tool (`npm run learn` or `./learn`) to just run the tests for the exercise you are interested in (recommended option).

## Following the rules

It is **really important** to follow "_the [rules](./rules.md)_" when solving the exercises. They are there to help you solve the problems in a "_functional way_".

## Solving the exercises

**You will find the exercises [here](./exercises.md).**

You can find the exercise's tests into `src/exercises` directory. They are sorted in the same way than in the [exercises page](./exercises.md). To solve one exercise, you should create a file next to the _test file_ with the same name, but without the `.test` part. The first exercise ([`id`](./src/exercises/01-id)) is already solved as an example. In that file you should define the _function_ that solves the problem and `export` it. If it's well done, the tests should pass for that exercise.

For some exercises, you can reuse the solutions you've already done. You can (and should) also use the _functions_ from `@utils`.

### Solving the exercises with JS

Even though I recommend to use TypeScript, you can solve the exercises using JavaScript. Just use the `.js` extension instead of the `.ts` one for your solutions. Also, remember to set the property you want to _export_ to `module.exports`. For instance, the first exercise would be like this solved with JavaScript (into a `src/exercises/01-id/id.js` file):

```javascript
const id = x => x;

module.exports = {
	id
};
```

## `@utils`

There is a collection of _utility funtions_ called "_@utils_". You can `import` them by doing (for example):

```typescript
import { add } from `@utils`;
```

The _functions_ there are all _curried_. You can find the source code of them at [`src/utils` directory](./src/utils).

## Solutions

The solutions to the exercises are uploaded to the [`solutions` branch](https://github.com/dggluz/fp-101/tree/solutions), you can take a peek to them if you wish (though I recommend you to try solving the problems by yourself first).

## Contributing

All the contributions (issues reporting, PRs, difussion, etc.) will be welcome.

## License

[MIT License](./LICENSE).
