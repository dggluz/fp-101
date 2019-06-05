import { curry } from '../fns/curry';
import { Ord } from './ord';

export const gte = curry((x: Ord, y: Ord) =>
	x >= y
);
