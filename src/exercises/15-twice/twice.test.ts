import { twice } from './twice';

describe('twice', () => {
	it('twice(shout)', () => {
		const shout = (x: string) =>
			x + '!'
		;

		const shout2 = twice(shout);

		expect(shout2('hello')).toBe('hello!!');
	});

	it('twice(question)', () => {
		const question = (x: string) =>
			x + '?'
		;

		const question2 = twice(question);

		expect(question2('hello')).toBe('hello??');
	});
});
