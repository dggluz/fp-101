export const both = <A, B> (fn: (x: A, y: A) => B) =>
	(x: A) =>
		fn(x, x)
;
