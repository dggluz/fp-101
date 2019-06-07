import { next } from './next';

describe('next', () => {
	it('next(-10)', () => {
		expect(next(-10)).toBe(-9);
	});

	it('next(1)', () => {
		expect(next(1)).toBe(2);
	});
});
