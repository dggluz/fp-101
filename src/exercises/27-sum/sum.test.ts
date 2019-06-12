import { sum } from './sum';

describe('sum (recursivity)', () => {
	it('sum(4) = 10', () => {
		expect(sum(4)).toBe(10);
	});

	it('sum(10) = 55', () => {
		expect(sum(10)).toBe(55);
	});
});
