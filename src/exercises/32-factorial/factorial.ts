import { gt, multiply, subtract } from '@utils';

export const factorial = (x: number): number =>
	gt(x, 1) ?
		multiply(x, factorial(subtract(x, 1))) :
		1
;
