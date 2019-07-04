import { and, compose, map, reduce } from '@utils';

export const partialEvery = <T> (predicate: (x: T) => boolean) =>
	compose(
		reduce(and, true),
		map(predicate)
	)
;
