import { sum } from './sum-reduce';

describe('sum (reduce)', () => {
	it('sum(empty list)', () => {
		expect(sum([])).toBe(0);
	});

	it('sum([...])', () => {
		expect(sum([1, 2, 3, 4, 5])).toBe(15);
	});
});
