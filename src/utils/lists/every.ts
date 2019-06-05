import { curry } from '../fns/curry';

interface EveryType {
	<T> (fn: (x: T) => boolean, xs: T[]): boolean;
	<T> (fn: (x: T) => boolean): (xs: T[]) => boolean;
}

export const every: EveryType = curry(<T> (fn: (x: T) => boolean, xs: T[]) =>
	xs.every(fn)
);
