import { head, isEmpty, or, prepend, tail } from '@utils';

export const zipWith = <A, B, C> (fn: (x: A, y: B) => C, xs: A[], ys: B[]): C[] =>
	or(isEmpty(xs), isEmpty(ys)) ?
		[] :
		prepend(fn(head(xs), head(ys)), zipWith(fn, tail(xs), tail(ys)))
;
