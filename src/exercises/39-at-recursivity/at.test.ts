import { at } from './at';

describe('at (recursivity)', () => {
	it('at(3, [...])', () => {
		expect(at(3, [1, 2, 3, 4, 5, 6])).toBe(4);
	});

	it('at(1, [...])', () => {
		expect(at(1, [1, 2, 3, 4, 5, 6])).toBe(2);
	});
});