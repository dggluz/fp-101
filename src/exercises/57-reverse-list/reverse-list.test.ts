import { reverse } from './reverse-list';

describe('reverse', () => {
	it('reverse with empty list', () => {
		expect(reverse([])).toEqual([]);
	});

	it('reverse([1, 2, 3])', () => {
		expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
	});
});
