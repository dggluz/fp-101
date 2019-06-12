import { mod } from './mod';

describe('mod (recursivity)', () => {
	it('mod(9, 3)', () => {
		expect(mod(9, 3)).toBe(0);
	});

	it('mod(10, 3)', () => {
		expect(mod(10, 3)).toBe(1);
	});

	it('mod(11, 3)', () => {
		expect(mod(11, 3)).toBe(2);
	});

	it('mod(12, 3)', () => {
		expect(mod(12, 3)).toBe(0);
	});
});
