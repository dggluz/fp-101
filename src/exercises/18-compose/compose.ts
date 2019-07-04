export const compose = <A, B, C> (f: (x: B) => C, g: (x: A) => B): (x: A) => C =>
	(x: A) =>
		f(g(x))
;
