import { add, multiply } from '@utils';
import { zipWith } from './zip-with';

describe('zipWith', () => {
	it('zipWith first list empty', () => {
		expect(zipWith(add, [], [1, 2, 3])).toEqual([]);
	});

	it('zipWith second list empty', () => {
		expect(zipWith(add, [1, 2, 3], [])).toEqual([]);
	});

	it('zipWith add', () => {
		expect(zipWith(add, [1, 2, 3], [10, 20, 30])).toEqual([11, 22, 33]);
	});

	it('zipWith multiply', () => {
		expect(zipWith(multiply, [1, 2, 3], [10, 100, 1000])).toEqual([10, 200, 3000]);
	});
});
