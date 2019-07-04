import { add, gt, subtract } from '@utils';

export const fibonacci = (x: number): number =>
	gt(x, 2) ?
		add(
			fibonacci(subtract(x, 1)),
			fibonacci(subtract(x, 2))
		) :
		1
;
