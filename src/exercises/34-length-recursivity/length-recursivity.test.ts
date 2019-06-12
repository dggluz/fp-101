import { length } from './length-recursivity';

describe('length (recursivity)', () => {
	it('length([])', () => {
		expect(length([])).toBe(0);
	});

	it('length([1, 2, 3])', () => {
		expect(length([1, 2, 3])).toBe(3);
	});

	it('length([1, 2, 3, 4, 5])', () => {
		expect(length([1, 2, 3, 4, 5])).toBe(5);
	});
});
