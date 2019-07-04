export const twice = <A> (fn: (x: A) => A) =>
	(x: A) =>
		fn(fn(x))
;
