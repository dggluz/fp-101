import { dobule } from './double';

describe('double', () => {
	it('double(3)', () => {
		expect(dobule(3)).toBe(6);
	});

	it('double(7)', () => {
		expect(dobule(7)).toBe(14);
	});
});
