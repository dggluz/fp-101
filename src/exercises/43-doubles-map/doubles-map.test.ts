import { doubles } from './doubles-map';

describe('doubles (map)', () => {
	it('empty list', () => {
		expect(doubles([])).toEqual([]);
	});

	it('doubles([1, 2, 3, 4, 5])', () => {
		expect(doubles([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
	});
});
