import { add, gt, subtract } from '@utils';

const previous = (x: number) =>
	subtract(x, 1)
;

export const sum = (x: number): number =>
	gt(x, 0) ?
		add(x, sum(previous(x))) :
		0
;
