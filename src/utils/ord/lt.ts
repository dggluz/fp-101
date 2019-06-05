import { curry } from '../fns/curry';
import { Ord } from './ord';

export const lt = curry((x: Ord, y: Ord) =>
	x < y
);
