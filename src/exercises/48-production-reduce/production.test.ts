import { production } from './production';

describe('production (reduce)', () => {
	it('production(empty list)', () => {
		expect(production([])).toBe(1);
	});

	it('production([1..6])', () => {
		expect(production([1, 2, 3, 4, 5, 6])).toEqual(720);
	})
});
