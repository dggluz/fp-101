import { head, isEmpty, or, tail } from '@utils';

export const some = <T> (predicate: (x: T) => boolean, xs: T[]): boolean =>
	isEmpty(xs) ?
		false :
		or(predicate(head(xs)), some(predicate, tail(xs)))
;
