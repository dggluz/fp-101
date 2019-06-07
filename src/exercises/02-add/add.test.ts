import { add } from './add';

describe('add', () => {
	it('add(3, 4)', () => {
		expect(add(3, 4)).toBe(7);
	});

	it('add(-1, -1)', () => {
		expect(add(-1, -1)).toBe(-2);
	})
});
