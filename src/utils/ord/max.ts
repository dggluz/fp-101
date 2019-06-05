import { curry } from '../fns/curry';
import { gte } from './gte';
import { Ord } from './ord';

export const max = curry((x: Ord, y: Ord) =>
	gte(x, y) ?
		x :
		y
);
