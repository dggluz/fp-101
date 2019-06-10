import { double } from './double';

describe('double', () => {
	it('double(3)', () => {
		expect(double(3)).toBe(6);
	});

	it('double(7)', () => {
		expect(double(7)).toBe(14);
	});
});
