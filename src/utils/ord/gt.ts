import { curry } from '../fns/curry';
import { Ord } from './ord';

export const gt = curry((x: Ord, y: Ord) =>
	x > y
);
