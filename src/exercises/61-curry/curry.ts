export const curry = <A, B, C> (fn: (x: A, y: B) => C) =>
	(x: A) =>
		(y: B) =>
			fn(x, y)
;
