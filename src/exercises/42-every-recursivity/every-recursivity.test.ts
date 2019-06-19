import { every } from './every-recursivity';

describe('Every (lists recursivity)', () => {
	it('every with contradiction', () => {
		expect(every(() => false, [1, 2, 3, 4, 5])).toBe(false);
	});

	it('every with tautology', () => {
		expect(every(() => true, [1, 2, 3, 4, 5])).toBe(true);
	});

	it('every with truthy contingency', () => {
		expect(every(x => x > 0, [1, 2, 3, 4, 5])).toBe(true);
	});

	it('every with falsy contingency', () => {
		expect(every(x => x > 3, [1, 2, 3, 4, 5])).toBe(false);
	});
});
