import { eq } from '@utils';
import { some } from './some-reduce';

describe('some', () => {
	const oneToSix = [1, 2, 3, 4, 5, 6];

	it('some that evaluates to true', () => {
		expect(some(eq(3), oneToSix)).toBe(true);
	});

	it('some that evaluates to false', () => {
		expect(some(eq(10), oneToSix)).toBe(false);
	});
});
