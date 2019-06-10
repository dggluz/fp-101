import { max } from './max';

describe('max', () => {
	describe('max with numbers', () => {
		it('max(1, 3)', () => {
			expect(max(1, 3)).toBe(3);
		});

		it('max(3, 1)', () => {
			expect(max(3, 1)).toBe(3);
		});

		it('max(3, 3)', () => {
			expect(max(3, 3)).toBe(3);
		});
	});

	describe('max with strings', () => {
		it('max("hello", "good bye")', () => {
			expect(max('hello', 'good bye')).toBe('hello');
		});

		it('max("good bye", "hello")', () => {
			expect(max('good bye', 'hello')).toBe('hello');
		});

		it('max("hello", "hello")', () => {
			expect(max('hello', 'hello')).toBe('hello');
		});
	});

	describe('max with booleans', () => {
		it('max(false, true)', () => {
			expect(max(false, true)).toBe(true);
		});

		it('max(true, false)', () => {
			expect(max(true, false)).toBe(true);
		});

		it('max(true, true)', () => {
			expect(max(true, true)).toBe(true);
		});
	});
});
