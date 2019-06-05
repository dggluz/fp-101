import { curry } from '../fns/curry';

interface FilterType {
	<T> (fn: (x: T) => boolean, xs: T[]): T[];
	<T> (fn: (x: T) => boolean): (xs: T[]) => T[];
}

export const filter: FilterType = curry(<T> (fn: (x: T) => boolean, xs: T[]) =>
	xs.filter(fn)
);
