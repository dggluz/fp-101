import { some } from './some-recursivity';

describe('Some (lists recursivity)', () => {
	it('some with contradiction', () => {
		expect(some(() => false, [1, 2, 3, 4, 5])).toBe(false);
	});

	it('some with tautology', () => {
		expect(some(() => true, [1, 2, 3, 4, 5])).toBe(true);
	});

	it('some with truthy contingency', () => {
		expect(some(x => x > 3, [1, 2, 3, 4, 5])).toBe(true);
	});

	it('some with falsy contingency', () => {
		expect(some(x => x > 10, [1, 2, 3, 4, 5])).toBe(false);
	});
});
