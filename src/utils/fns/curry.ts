/**
 * Source code taken from https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/appendix_a.md
 * Typings taken from https://github.com/hrajchert/ts-curry-example/blob/master/src/curry.d.ts
 */

export type Curry4<A, B, C, D, R> = {
	(a: A): Curry3<B, C, D, R>;
	(a: A, b: B): Curry2<C, D, R>;
	(a: A, b: B, c: C): Curry1<D, R>;
	(a: A, b: B, c: C, d: D): R;
};

export type Curry3<A, B, C, R> = {
	(a: A): Curry2<B, C, R>;
	(a: A, b: B): Curry1<C, R>;
	(a: A, b: B, c: C): R;
};

export type Curry2<A, B, R> = {
	(a: A): Curry1<B, R>;
	(a: A, b: B): R;
};

export type Curry1<A, R> = (a: A) => R;

export type VariadicCurry <T, R> =
	T extends [any, any, any, any] ? Curry4<T[0], T[1], T[2], T[3], R> :
	T extends [any, any, any] ? Curry3<T[0], T[1], T[2], R> :
	T extends [any, any] ? Curry2<T[0], T[1], R> :
	T extends [any] ? Curry1<T[0], R> :
	unknown
;

export function curry <T extends any[], R>
	(fn: (...args: T) => R): VariadicCurry<T, R>;

// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
export function curry (fn: (...args: any[]) => any) {
	const arity = fn.length;

	return function $curry (...args: any[]): any {
		if (args.length < arity) {
			return $curry.bind(null, ...args);
		}

		return fn.call(null, ...args);
	};
}
