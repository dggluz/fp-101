import { plusTwo } from './plus-two';

describe('plusTwo', () => {
	it('plusTwo(20)', () => {
		expect(plusTwo(20)).toBe(22);
	});

	it('plusTwo(0)', () => {
		expect(plusTwo(0)).toBe(2);
	});
});
