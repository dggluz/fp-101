import { curry } from '../fns/curry';
import { Ord } from './ord';

export const lte = curry((x: Ord, y: Ord) =>
	x <= y
);
