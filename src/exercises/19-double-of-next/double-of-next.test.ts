import { doubleOfNext } from './double-of-next';

describe('doubleOfNext', () => {
	it('doubleOfNext(5)', () => {
		expect(doubleOfNext(5)).toBe(12);
	});

	it('doubleOfNext(100)', () => {
		expect(doubleOfNext(100)).toBe(202);
	});
});
