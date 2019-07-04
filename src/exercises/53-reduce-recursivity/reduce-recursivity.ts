import { head, isEmpty, tail } from '@utils';

export const reduce = <A, B> (fn: (acc: A, elem: B) => A, initialValue: A, xs: B[]): A =>
	isEmpty(xs) ?
		initialValue :
		reduce(fn, fn(initialValue, head(xs)), tail(xs))
;
