import { head, isEmpty, multiply, prepend, tail } from '@utils';

const double = multiply(2);

export const doubles = (xs: number[]): number[] =>
	isEmpty(xs) ?
		[] :
		prepend(double(head(xs)), doubles(tail(xs)))
;
