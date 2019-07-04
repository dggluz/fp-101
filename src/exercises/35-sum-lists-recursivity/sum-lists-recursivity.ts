import { add, isEmpty, tail } from '@utils';
import { head } from '../23-at-curry/at-curry';

export const sum = (xs: number[]): number =>
	isEmpty(xs) ?
		0 :
		add(head(xs), sum(tail(xs)))
;
