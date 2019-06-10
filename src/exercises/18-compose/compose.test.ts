import { compose } from './compose';

describe('compose', () => {
	it('compose(f, g)', ()  => {
		const head =(x: number[]) => x[0];
		const reverse =(x: number[]) => x.slice().reverse();

		const last = compose(head, reverse);

		expect(last([1, 2, 3, 4])).toBe(4);
	});
});
