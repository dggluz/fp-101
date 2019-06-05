export const flip = <A, B, C> (f: (x: A, y: B) => C) =>
	(y: B, x: A) =>
		f(x, y)
;
