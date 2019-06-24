import { evens } from './evens-filter';

describe('evens (filter)', () => {
	it('evens with emptylist', () => {
		expect(evens([])).toEqual([]);
	});

	it('evens of numbers list', () => {
		expect(evens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
	});
});
