import { concat, divide } from '@utils';
import { both } from './both';

describe('both', () => {
	it('both(concat)', () => {
		const concatBoth = both(concat);

		expect(concatBoth('hello')).toBe('hellohello');
	});

	it('both(divide) = 1', () => {
		const one = both(divide);

		expect(one(40)).toBe(1);
	});
});
