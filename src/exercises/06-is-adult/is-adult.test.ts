import { isAdult } from './is-adult';

describe('isAdult', () => {
	it('isAdult(aChild)', () => {
		expect(isAdult({
			age: 7
		})).toBe(false);
	});

	it('isAdult(youngOne)', () => {
		expect(isAdult({
			age: 18
		})).toBe(true);
	});

	it('isAdult(oldOne)', () => {
		expect(isAdult({
			age: 99
		})).toBe(true);
	});
});
