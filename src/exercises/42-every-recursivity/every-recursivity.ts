import { and, head, isEmpty, tail } from '@utils';

export const every = <T> (predicate: (x: T) => boolean, xs: T[]): boolean =>
	isEmpty(xs) ?
		true :
		and(predicate(head(xs)), every(predicate, tail(xs)))
;
