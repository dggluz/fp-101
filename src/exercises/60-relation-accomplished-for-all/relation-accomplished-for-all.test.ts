import { eq, gt } from '@utils';
import { relationAccomplishedForAll } from './relation-accomplished-for-all';

describe('relationAccomplishedForAll', () => {
	describe('equalLists', () => {
		const equalLists = relationAccomplishedForAll(eq);

		it('equalLists -> false', () => {
			expect(equalLists([1, 2, 3], [1, 1, 1])).toBe(false);
		});

		it('equalLists -> true', () => {
			expect(equalLists([1, 2, 3], [1, 2, 3])).toBe(true);
		});
	});

	describe('allGreaterThan', () => {
		const allGreaterThan = relationAccomplishedForAll(gt);

		it('allGreaterThan -> false', () => {
			expect(allGreaterThan([1, 2, 3], [1, 2, 3])).toBe(false);
		});

		it('allGreaterThan -> true', () => {
			expect(allGreaterThan([1, 2, 3], [0, 1, 2])).toBe(true);
		});
	});
});
