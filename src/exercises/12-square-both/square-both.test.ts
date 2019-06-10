import { squareBoth } from './square-both';

describe('squareBoth', () => {
	it('squareBoth(3)', () => {
		expect(squareBoth(3)).toBe(9);
	});

	it('squareBoth(-2)', () => {
		expect(squareBoth(-2)).toBe(4);
	});
});
