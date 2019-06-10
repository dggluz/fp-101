import { flippedConcat } from './flipped-concat';

describe('flippedConcat', () => {
	it('flippedConcat("hello", "mr")', () => {
		expect(flippedConcat('hello', 'mr')).toBe('mrhello');
	});
	it('flippedConcat("no", "way")', () => {
		expect(flippedConcat('no', 'way')).toBe('wayno');
	});
});
