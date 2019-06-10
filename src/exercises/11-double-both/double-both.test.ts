import { doubleBoth } from './double-both';

describe('doubleBoth', () => {
	it('doubleBoth(3)', () => {
		expect(doubleBoth(3)).toBe(6);
	});

	it('doubleBoth(7)', () => {
		expect(doubleBoth(7)).toBe(14);
	});
});
