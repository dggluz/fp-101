import { compose } from './compose';

describe('compose', () => {
	const ask = (x: string) => x + '?';
	const shout = (x: string) => x + '!';

	it('compose(f, g)', ()  => {
		const shoutAQuestion = compose(ask, shout);

		expect(shoutAQuestion('really')).toBe('really?!');
	});

	it('compose(g, f)', () => {
		const askAShout = compose(shout, ask);

		expect(askAShout('really')).toBe('really!?');
	});
});
