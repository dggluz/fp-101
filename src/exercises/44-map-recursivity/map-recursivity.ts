import { head, isEmpty, prepend, tail } from '@utils';

export const map = <A, B> (fn: (x: A) => B, xs: A[]): B[] =>
	isEmpty(xs) ?
		[] :
		prepend(fn(head(xs)), map(fn, tail(xs)))
;
