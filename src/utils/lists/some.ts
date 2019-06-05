import { curry } from '../fns/curry';

interface SomeType {
	<T> (fn: (x: T) => boolean, xs: T[]): boolean;
	<T> (fn: (x: T) => boolean): (xs: T[]) => boolean;
}

export const some: SomeType = curry(<T> (fn: (x: T) => boolean, xs: T[]) =>
	xs.some(fn)
);
