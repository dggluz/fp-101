import { eq, gt, mod } from '@utils';
import { filter } from './filter-reduce';

describe('filter (reduce)', () => {
	const even = (x: number) =>
		eq(0, mod(x, 2))
	;

	const isPositive = (x: number) =>
		gt(x, 0)
	;

	const numbers = [-3, -2, -1, 0, 1, 2, 3];

	it('Empty list', () => {
		expect(filter(even, [])).toEqual([]);
	});

	it('filter evens', () => {
		expect(filter(even, numbers)).toEqual([-2, 0, 2]);
	});

	it('filter positives', () => {
		expect(filter(isPositive, numbers)).toEqual([1, 2, 3]);
	});
});
