import { head, isEmpty, multiply, tail } from '@utils';

export const production = (xs: number[]): number =>
	isEmpty(xs) ?
		1 :
		multiply(head(xs), production(tail(xs)))
;
