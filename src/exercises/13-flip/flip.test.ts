import { subtract } from '@utils';
import { flip } from './flip';

describe('flip', () => {
	const flippedSubtract = flip(subtract);

	it('flip(subtract)', () => {
		expect(flippedSubtract(10, 4)).toBe(-6);
	});

	it('flip(flip(subtract)) = subtract', () => {
		const flippedFlippedSubtract = flip(flippedSubtract);

		expect(flippedFlippedSubtract(10, 4)).toBe(6);
	});
});
