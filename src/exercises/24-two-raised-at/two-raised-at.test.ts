import { twoRaisedAt } from './two-raised-at';

describe('twoRaisedAt', () => {
	it('2 ^ 2 = 4', () => {
		expect(twoRaisedAt(2)).toBe(4);
	});

	it('2 ^ 3 = 4', () => {
		expect(twoRaisedAt(3)).toBe(8);
	});

	it('2 ^ 0 = 1', () => {
		expect(twoRaisedAt(0)).toBe(1);
	});
});
