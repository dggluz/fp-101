export const flip = <A, B, C> (fn: (x: A, y: B) => C) =>
	(y: B, x: A) =>
		fn(x, y)
;
