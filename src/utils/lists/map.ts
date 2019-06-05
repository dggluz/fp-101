import { curry } from '../fns/curry';

interface MapType {
	<A, B> (fn: (x: A) => B, xs: A[]): B[];
	<A, B> (fn: (x: A) => B): (xs: A[]) => B[];
}

export const map: MapType = curry(<A, B> (fn: (x: A) => B, xs: A[]) =>
	xs.map(fn)
);
