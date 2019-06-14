import { evens } from './evens';

describe('evens', () => {
	it('evens([])', () => {
		expect(evens([])).toEqual([]);
	});

	it('evens([1, ..., 10])', () => {
		expect(evens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
	});
});
