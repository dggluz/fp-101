import { divide } from './divide';

describe('divide (recursivity)', () => {
	it('divide(25, 5)', () => {
		expect(divide(25, 5)).toBe(5);
	});

	it('divide(26, 5)', () => {
		expect(divide(26, 5)).toBe(5);
	});

	it('divide(24, 5)', () => {
		expect(divide(24, 5)).toBe(4);
	});

	it('divide(20, 5)', () => {
		expect(divide(20, 5)).toBe(4);
	});

	it('divide(12, 3)', () => {
		expect(divide(12, 3)).toBe(4);
	});
});
