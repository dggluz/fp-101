import { curry } from '../fns/curry';

interface PrependType {
	<T> (x: T, xs: T[]): T[];
	<T> (x: T): (xs: T[]) => T[];
}

export const prepend: PrependType = curry(<T> (x: T, xs: T[]) =>
	[x].concat(xs)
);
