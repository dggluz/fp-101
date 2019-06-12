import { multiply } from './multiply';

describe('multiply', () => {
	it('multiply(3, 4)', () => {
		expect(multiply(3, 4)).toBe(12);
	});

	it('multiply(4, 3)', () => {
		expect(multiply(4, 3)).toBe(12);
	});

	it('multiply(10, 0)', () => {
		expect(multiply(10, 0)).toBe(0);
	});

	it('multiply(0, 10)', () => {
		expect(multiply(0, 10)).toBe(0);
	});

	it('multiply(10, 10)', () => {
		expect(multiply(10, 10)).toBe(100);
	});
});
