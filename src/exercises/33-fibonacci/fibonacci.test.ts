import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
	it('fibonacci(2) = 1', () => {
		expect(fibonacci(2)).toBe(1);
	});

	it('fibonacci(8) = 21', () => {
		expect(fibonacci(8)).toBe(21);
	});

	it('fibonacci(12) = 144', () => {
		expect(fibonacci(12)).toBe(144);
	});
});
