import { id } from './id';

describe('id', () => {
	it('id with numbers', () => {
		expect(id(4)).toBe(4);
	});

	it('id with strings', () => {
		expect(id('foo')).toBe('foo');
	});

	it('id with booleans', () => {
		expect(id(true)).toBe(true);
	});
});
