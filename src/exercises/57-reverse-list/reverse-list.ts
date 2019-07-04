import { append, head, isEmpty, tail } from '@utils';

export const reverse = <T> (xs: T[]): T[] =>
	isEmpty(xs) ?
		[] :
		append(head(xs), reverse(tail(xs)))
;
