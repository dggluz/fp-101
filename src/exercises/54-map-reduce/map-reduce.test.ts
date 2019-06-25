import { multiply, pow } from '@utils';
import { map } from '../44-map-recursivity/map-recursivity';

describe('map (reduce)', () => {
	const double = multiply(2);

	it('map with empty list', () => {
		expect(map(double, [])).toEqual([]);
	});

	it('map(double)', () => {
		expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
	});

	it('map(square)', () => {
		expect(map(x => pow(x, 2), [1, 2, 3])).toEqual([1, 4, 9]);
	});
});
