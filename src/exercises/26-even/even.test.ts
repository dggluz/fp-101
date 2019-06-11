import { even } from './even';

describe('even', () => {
	it('even(1)', () => {
		expect(even(1)).toBe(false);
	});

	it('even(2)', () => {
		expect(even(2)).toBe(true);
	});

	it('even(3)', () => {
		expect(even(3)).toBe(false);
	});

	it('even(4)', () => {
		expect(even(4)).toBe(true);
	});
});
