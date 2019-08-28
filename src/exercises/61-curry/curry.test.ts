import { curry } from './curry';

describe('curry', () => {
	describe('curry(add)', () => {
		const add = (x: number, y: number) => x + y;

		const curriedAdd = curry(add);

		it('add(2, 3)', () => {
			expect(curriedAdd(2)(3)).toBe(5);
		});

		it('add(10, 10)', () => {
			expect(curriedAdd(10)(10)).toBe(20);
		});
	});

	describe('curry(pow)', () => {
		const pow = (x: number, y: number) => Math.pow(x, y);

		const curriedPow = curry(pow);

		it('pow(2, 3)', () => {
			expect(curriedPow(2)(3)).toBe(8);
		});

		it('pow(3, 2)', () => {
			expect(curriedPow(3)(2)).toBe(9);
		});
	});
});
