import { gte, subtract } from '@utils';

export const mod = (dividend: number, divider: number): number =>
	gte(dividend, divider) ?
		mod(subtract(dividend, divider), divider) :
		dividend
;
