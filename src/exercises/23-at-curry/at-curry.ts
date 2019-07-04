import { curry } from '@utils';

export const at = (pos: number, xs: number[]) =>
	xs[pos]
;

export const curriedAt = curry(at);

export const head = curriedAt(0);
