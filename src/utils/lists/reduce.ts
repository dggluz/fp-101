import { curry } from '../fns/curry';

interface ReduceType {
	<A, B> (fn: (acc: A, x: B) => A, initialValue: A, xs: B[]): A;
	<A, B> (fn: (acc: A, x: B) => A, initialValue: A): (xs: B[]) => A;
	<A, B> (fn: (acc: A, x: B) => A): {
		(initialValue: A, xs: B[]): A;
		(initialValue: A): (xs: B[]) => A;
	};
}

export const reduce: ReduceType = curry(<A, B> (fn: (acc: A, x: B) => A, initialValue: A, xs: B[]) =>
	xs.reduce(fn, initialValue)
);
