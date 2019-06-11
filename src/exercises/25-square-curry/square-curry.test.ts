import { square } from './square-curry';

describe('square (curry)', () => {
	it('square(3)', () => {
		expect(square(3)).toBe(9);
	});

	it('square(-2)', () => {
		expect(square(-2)).toBe(4);
	});
});
