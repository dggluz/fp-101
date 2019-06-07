import { and } from './and';

describe('and', () => {
	it('and(false, false)', () => {
		expect(and(false, false)).toBe(false);
	});

	it('and(false, true)', () => {
		expect(and(false, true)).toBe(false);
	});

	it('and(true, false)', () => {
		expect(and(true, false)).toBe(false);
	});

	it('and(true, true)', () => {
		expect(and(true, true)).toBe(true);
	});
});
