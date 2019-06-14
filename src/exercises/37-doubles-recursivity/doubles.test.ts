import { doubles } from './doubles';

describe('Recursivity with lists', () => {
	describe('Doubles', () => {
		it('Doubles of [1, 2, 3]', () => {
			expect(doubles([1, 2, 3]))
				.toEqual([2, 4, 6]);
		});

		it('Doubles of empty list', () => {
			expect(doubles([]))
				.toEqual([]);
		});
	});
});
