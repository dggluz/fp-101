import { curry } from '../fns/curry';
import { lte } from './lte';
import { Ord } from './ord';

export const min = curry((x: Ord, y: Ord) =>
	lte(x, y) ?
		x :
		y
);
