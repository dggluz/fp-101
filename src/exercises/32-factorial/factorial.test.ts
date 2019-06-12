import { factorial } from './factorial';

describe('factorial', () => {
	it('factorial(1) = 1', () => {
		expect(factorial(1)).toBe(1);
	});

	it('factorial(2) = 2', () => {
		expect(factorial(2)).toBe(2);
	});

	it('factorial(3) = 6', () => {
		expect(factorial(3)).toBe(6);
	});

	it('factorial(4) = 24', () => {
		expect(factorial(4)).toBe(24);
	});
});
