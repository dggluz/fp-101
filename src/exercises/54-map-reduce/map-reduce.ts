import { append, reduce } from '@utils';

export const map = <A, B> (fn: (x: A) => B, xs: A[]) =>
	reduce((prevList: B[], elem) =>
		append(fn(elem), prevList)
	, [], xs)
;
