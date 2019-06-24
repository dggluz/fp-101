import { maximum } from './maximum-reduce';

describe('maximum (reduce)', () => {
	it('maximum([1..10])', () => {
		expect(maximum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
	});

	it('maximum([10..1])', () => {
		expect(maximum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(10);
	});
});
