import { eq, head, subtract, tail } from '@utils';

const previous = (x: number) => subtract(x, 1);

export const at = <T> (pos: number, xs: T[]): T =>
	eq(pos, 0) ?
		head(xs) :
		at(previous(pos), tail(xs))
;
