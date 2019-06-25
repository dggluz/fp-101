import { curry } from '../fns/curry';

interface AppendType {
	<T> (x: T, xs: T[]): T[];
	<T> (x: T): (xs: T[]) => T[];
}

export const append: AppendType = curry(<T> (x: T, xs: T[]) =>
	xs.concat(x)
);
