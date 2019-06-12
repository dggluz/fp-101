import { pow } from './pow';

describe('pow', () => {
	it('pow(3, 0) = 1', () => {
		expect(pow(3, 0)).toBe(1);
	});

	it('pow(3, 1) = 3', () => {
		expect(pow(3, 1)).toBe(3);
	});

	it('pow(3, 2) = 9', () => {
		expect(pow(3, 2)).toBe(9);
	});

	it('pow(3, 3) = 27', () => {
		expect(pow(3, 3)).toBe(27);
	});

	it('pow(3, 4) = 81', () => {
		expect(pow(3, 4)).toBe(81);
	});
});
