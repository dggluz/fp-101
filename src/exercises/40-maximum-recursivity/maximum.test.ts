import { maximum } from './maximum';

describe('Maximum', () => {
	it('maximum([3])', () => {
		expect(maximum([3])).toBe(3);
	});

	it('maximum([...])', () => {
		expect(maximum([4,3,5,3,2,6,7,8,3,2,5,8,9,0,9,7,6,4,3,2,1,1,2,3,5,7,9,9,0,7,6,4,3])).toBe(9);
	});
});
