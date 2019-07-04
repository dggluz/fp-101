import { head, isEmpty, prepend, tail } from '@utils';
import { even } from '../26-even/even';

export const evens = (xs: number[]): number[] =>
	isEmpty(xs) ? [] :
	even(head(xs)) ?
		prepend(head(xs), evens(tail(xs))) :
		evens(tail(xs))
;
