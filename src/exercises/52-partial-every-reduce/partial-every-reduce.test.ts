import { eq, gt, mod } from '@utils';
import { partialEvery } from './partial-every-reduce';

describe('partial every (reduce)', () => {
	const evens = [2, 4, 6, 8, 10];
	const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const aboveAndBelowZero = [-3, -2, -1, 0, 1, 2, 3];

	const even = (x: number) =>
		eq(mod(x, 2), 0)
	;

	const isPositive = (x: number) =>
		gt(x, 0)
	;

	const allEvens = partialEvery(even);
	const allPositives = partialEvery(isPositive);

	it('allPositives evaluated to true', () => {
		expect(allPositives(oneToTen)).toBe(true);
	});

	it('allPositives evaluated to false', () => {
		expect(allPositives(aboveAndBelowZero)).toBe(false);
	});

	it('allEvens evaluated to true', () => {
		expect(allEvens(evens)).toBe(true);
	});

	it('allEvens evaluated to false', () => {
		expect(allEvens(oneToTen)).toBe(false);
	});
});
