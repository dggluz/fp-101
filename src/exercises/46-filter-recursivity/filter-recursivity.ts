import { head, isEmpty, prepend, tail } from '@utils';

export const filter = <T> (predicate: (x: T) => boolean, xs: T[]): T[] =>
	isEmpty(xs) ?
		[] :
		predicate(head(xs)) ?
			prepend(head(xs), filter(predicate, tail(xs))) :
			filter(predicate, tail(xs))
;
