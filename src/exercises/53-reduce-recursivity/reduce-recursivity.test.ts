import { add, max, multiply } from '@utils';
import { reduce } from './reduce-recursivity';

describe('reduce (recursivity)', () => {
	it('reduce (sum)', () => {
		expect(reduce(add, 0, [1, 2, 3, 4])).toBe(10);
	});

	it('reduce (production)', () => {
		expect(reduce(multiply, 1, [1, 2, 3, 4])).toBe(24);
	});

	it('reduce (maximum)', () => {
		expect(reduce(max, -Infinity, [1, 2, 3, 4])).toBe(4);
	});
});
