import { add, gt, subtract } from '@utils';

const previous = (x: number) => subtract(x, 1);

export const multiply = (x: number, y: number): number =>
	gt(x, 0) ?
		add(y, multiply(previous(x), y)) :
		0
;
