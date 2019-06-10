import { compose } from './compose';

describe('compose', () => {
	const next = (x: number) => x + 1;
	const double = (x: number) => x * 2;

	it('compose(f, g)', ()  => {
		const doubleOfNext = compose(next, double);

		expect(doubleOfNext(5)).toBe(12);
	});

	it('compose(g, f)', () => {
		const nextOfDouble = compose(double, next);

		expect(nextOfDouble(5)).toBe(11);
	});
});
