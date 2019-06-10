import { gt } from './gt';

describe('gt', () => {
	describe('gt with numbers', () => {
		it('gt(1, 3)', () => {
			expect(gt(1, 3)).toBe(false);
		});

		it('gt(3, 1)', () => {
			expect(gt(3, 1)).toBe(true);
		});

		it('gt(3, 3)', () => {
			expect(gt(3, 3)).toBe(false);
		});
	});

	describe('gt with strings', () => {
		it('gt("hello", "good bye")', () => {
			expect(gt('hello', 'good bye')).toBe(true);
		});

		it('gt("good bye", "hello")', () => {
			expect(gt('good bye', 'hello')).toBe(false);
		});

		it('gt("hello", "hello")', () => {
			expect(gt('hello', 'hello')).toBe(false);
		});
	});

	describe('gt with booleans', () => {
		it('gt(false, true)', () => {
			expect(gt(false, true)).toBe(false);
		});

		it('gt(true, false)', () => {
			expect(gt(true, false)).toBe(true);
		});

		it('gt(true, true)', () => {
			expect(gt(true, true)).toBe(false);
		});
	});
});
