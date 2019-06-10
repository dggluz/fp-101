import { quadruple } from './quadruple';

describe('quadruple', () => {
	it('quadruple(2)', () => {
		expect(quadruple(2)).toBe(8);
	});

	it('quadruple(3)', () => {
		expect(quadruple(3)).toBe(12);
	});
});
