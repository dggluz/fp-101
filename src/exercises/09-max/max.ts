import { gt, Ord } from '@utils';

export const max = <T extends Ord> (x: T, y: T) =>
	gt(x, y) ? x : y
;
