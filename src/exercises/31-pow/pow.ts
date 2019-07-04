import { gt, multiply, subtract } from '@utils';

const previous = (x: number) =>
	subtract(x, 1)
;

export const pow = (base: number, potence: number): number =>
	gt(potence, 0) ?
		multiply(base, pow(base, previous(potence))) :
		1
;
