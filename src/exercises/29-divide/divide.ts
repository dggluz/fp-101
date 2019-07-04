import { add, gte, subtract } from '@utils';

export const divide = (dividend: number, divider: number): number =>
	gte(dividend, divider) ?
		add(1, divide(subtract(dividend, divider), divider)) :
		0
;
