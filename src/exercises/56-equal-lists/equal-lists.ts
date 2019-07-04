import { and, eq, head, isEmpty, not, tail } from '@utils';

export const equalLists = <T> (xs: T[], ys: T[]): boolean =>
	isEmpty(xs) ?
		isEmpty(ys) :
		and(
			not(isEmpty(ys)),
			and(
				eq(head(xs), head(ys)),
				equalLists(tail(xs), tail(ys))
			)
		)
;
