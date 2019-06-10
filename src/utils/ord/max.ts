import { curry } from '../fns/curry';
import { gte } from './gte';
import { Ord } from './ord';

interface TypeOfMax {
	<T extends Ord> (x: T, y: T): T;
	<T extends Ord> (x: T): (y: T) => T;
}

export const max: TypeOfMax = curry(<T extends Ord>(x: T, y: T): T =>
	gte(x, y) ?
		x :
		y
);
