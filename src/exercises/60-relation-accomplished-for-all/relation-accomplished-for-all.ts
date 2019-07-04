import { every, id } from '@utils';
import { zipWith } from '../59-zip-with/zip-with';

export const relationAccomplishedForAll = <A, B> (fn: (x: A, y: B) => boolean) =>
	(xs: A[], ys: B[]) =>
		every(id, zipWith(fn, xs, ys))
;
