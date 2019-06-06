import { Fn2 } from './fns';

export const flip = <A, B, C> (f: Fn2<A, B, C>) =>
	(y: B, x: A) =>
		f(x, y)
;
