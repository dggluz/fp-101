import { eq } from '../eq/eq';

export const isEmpty = (x: any[]) =>
	eq(0, x.length)
;
