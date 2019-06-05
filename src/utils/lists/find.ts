import { curry } from '../fns/curry';

interface FindType {
	<T> (fn: (x: T) => boolean, xs: T[]): T | undefined;
	<T> (fn: (x: T) => boolean): (xs: T[]) => T | undefined;
}

export const find: FindType = curry(<T> (fn: (x: T) => boolean, xs: T[]) =>
	xs.find(fn)
);
