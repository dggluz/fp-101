import { multiply, pow } from '@utils';
import { map } from './map-recursivity';

const double = (x: number) =>
	multiply(x, 2)
;

const square = (x: number) =>
	pow(x, 2)
;

const list = [1, 2, 3, 4, 5];

describe('map (recursivity)', () => {
	it('map(_, [])', () => {
		expect(map(double, [])).toEqual([]);
	});

	it('map(double, list)', () => {
		expect(map(double, list)).toEqual([2, 4, 6, 8, 10]);
	});

	it('map(square, list)', () => {
		expect(map(square, list)).toEqual([1, 4, 9, 16, 25]);
	});
});
