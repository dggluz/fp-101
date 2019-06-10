import { not } from './not';

describe('not', () => {
	it('not(false)', () => {
		expect(not(false)).toBe(true);
	});

	it('not(true)', () => {
		expect(not(true)).toBe(false);
	});
});
