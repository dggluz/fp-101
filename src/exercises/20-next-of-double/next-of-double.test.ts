import { nextOfDouble } from './next-of-double';

describe('nextOfDouble', () => {
	it('nextOfDouble(5)', () => {
		expect(nextOfDouble(5)).toBe(11);
	});

	it('nextOfDouble(100)', () => {
		expect(nextOfDouble(100)).toBe(201);
	});
});
