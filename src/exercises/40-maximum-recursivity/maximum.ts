import { gt, head, isEmpty, tail, prepend, max, composeLtr } from '@utils';
import { at } from '../39-at-recursivity/at';

const subhead = <T> (xs: T[]) =>
	at(1, xs)
;

const subtail = composeLtr(tail, tail);

export const maximum = (xs: number[]): number =>
	isEmpty(tail(xs)) ?
		head(xs) :
		maximum(prepend(
			max(head(xs), subhead(xs)),
			subtail(xs)
		))
;
