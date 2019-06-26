import { palindrome } from './palindrome';

describe('palindrome', () => {
	const strToArr = (str: string) =>
		str.split('')
	;

	it('palindrome(boy)', () => {
		expect(palindrome(strToArr('boy'))).toBe(false);
	});

	it('palindrome(curry)', () => {
		expect(palindrome(strToArr('curry'))).toBe(false);
	});

	it('palindrome(madam)', () => {
		expect(palindrome(strToArr('madam'))).toBe(true);
	});

	it('palindrome(rotator)', () => {
		expect(palindrome(strToArr('rotator'))).toBe(true);
	});
});
