import { length } from './length-reduce';

describe('length (reduce)', () => {
	it('length(empty list)', () => {
		expect(length([])).toBe(0);
	});

	it('length([1, 2, 3])', () => {
		expect(length([1, 2, 3])).toBe(3);
	});
});
