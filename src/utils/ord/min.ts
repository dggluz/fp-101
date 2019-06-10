import { curry } from '../fns/curry';
import { lte } from './lte';
import { Ord } from './ord';

interface TypeOfMin {
	<T extends Ord> (x: T, y: T): T;
	<T extends Ord> (x: T): (y: T) => T;
}

export const min: TypeOfMin = curry((x: Ord, y: Ord) =>
	lte(x, y) ?
		x :
		y
);
