import { eq, gt, mod } from '@utils';
import { filter } from './filter-recursivity';

describe('filter (recursivity)', () => {
	const even = (x: number) =>
		eq(mod(x, 2), 0)
	;

	const isPositive = (x: number) =>
		gt(x, 0)
	;

	it('filter with empty list', () => {
		expect(filter(even, [])).toEqual([]);
	});

	it('filter(even, ...)', () => {
		expect(filter(even, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
	});

	it('filter(isPositive, ...)', () => {
		expect(filter(isPositive, [-3, -2, -1, 0, 1, 2, 3])).toEqual([1, 2, 3]);
	});
});
