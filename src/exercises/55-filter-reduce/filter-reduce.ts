import { append, reduce } from '@utils';

export const filter = <T> (fn: (x: T) => boolean, xs: T[]) =>
	reduce((arr: T[], elem) =>
		fn(elem) ?
			append(elem, arr) :
			arr
	, [], xs
	)
;
