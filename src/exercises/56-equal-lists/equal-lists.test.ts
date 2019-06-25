import { equalLists } from './equal-lists';

describe('equalLists', () => {
	describe('Non equal', () => {
		it('first empty', () => {
			expect(equalLists([], [1])).toBe(false);
		});

		it('second empty', () => {
			expect(equalLists([1], [])).toBe(false);
		});

		it('just non equals', () => {
			expect(equalLists([1, 2, 3], [1, 1, 1])).toBe(false);
		});
	});

	describe('Equal', () => {
		it('empty lists', () => {
			expect(equalLists([], [])).toBe(true);
		});

		it('numbers list', () => {
			expect(equalLists([1, 2, 3], [1, 2, 3])).toBe(true);
		});

		it('strings lists', () => {
			expect(equalLists(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
		});

		it('booleans lists', () => {
			expect(equalLists([false, true], [false, true])).toBe(true);
		});
	});
});
