import { production } from './production';

describe('production', () => {
	it('production([4])', () => {
		expect(production([4])).toBe(4);
	});

	it('production([4, 3, 2, 1])', () => {
		expect(production([4, 3, 2, 1])).toBe(24);
	});

	it('production([4, 4])', () => {
		expect(production([4, 4])).toBe(16);
	});
});
