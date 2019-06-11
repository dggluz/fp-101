import { at, curriedAt, head } from './at-curry';

describe('at (curry)', () => {
	describe('at', () => {
		it('at(3, [...])', () => {
			expect(at(3, [1, 2, 3, 4, 5, 6])).toBe(4);
		});

		it('at(1, [...])', () => {
			expect(at(1, [1, 2, 3, 4, 5, 6])).toBe(2);
		});
	});

	describe('curriedAt', () => {
		describe('curriedAt fully applied', () => {
			it('curriedAt(3, [...])', () => {
				expect(curriedAt(3, [1, 2, 3, 4, 5, 6])).toBe(4);
			});

			it('curriedAt(1, [...])', () => {
				expect(curriedAt(1, [1, 2, 3, 4, 5, 6])).toBe(2);
			});
		});

		describe('curriedAt partially applied', () => {
			it('curriedAt(3)', () => {
				const getFourth = curriedAt(3);
				expect(getFourth).toBeInstanceOf(Function);
				expect(getFourth([1, 2, 3, 4, 5, 6])).toBe(4);
			});

			it('curriedAt(1)', () => {
				const getSecond = curriedAt(1);
				expect(getSecond).toBeInstanceOf(Function);
				expect(getSecond([1, 2, 3, 4, 5, 6])).toBe(2);
			});
		});
	});

	describe('head', () => {
		it('head([1, 2, 3])', () => {
			expect(head([1, 2, 3])).toBe(1);
		});

		it('head([3, 2, 1])', () => {
			expect(head([3, 2, 1])).toBe(3);
		});
	});
});
