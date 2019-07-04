import { map, or, reduce } from '@utils';

export const some = <T> (predicate: (x: T) => boolean, xs: T[]) =>
	reduce(or, false, map(predicate, xs))
;
