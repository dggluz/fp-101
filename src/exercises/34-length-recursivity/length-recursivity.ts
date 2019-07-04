import { add, isEmpty, tail } from '@utils';

export const length = <T> (xs: T[]): number =>
	isEmpty(xs) ?
		0 :
		add(1, length(tail(xs)))
;
