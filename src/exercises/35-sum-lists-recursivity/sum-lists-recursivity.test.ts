import { sum } from './sum-lists-recursivity';

describe('sum (recursivity with lists)', () => {
	it('sum([])', () => {
		expect(sum([])).toBe(0);
	});

	it('sum([1, 2, 3])', () => {
		expect(sum([1, 2, 3])).toBe(6);
	});

	it('sum([100, 100, 100])', () => {
		expect(sum([100, 100, 100])).toBe(300);
	});
});
