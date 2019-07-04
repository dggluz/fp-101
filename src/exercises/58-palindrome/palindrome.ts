import { equalLists } from '../56-equal-lists/equal-lists';
import { reverse } from '../57-reverse-list/reverse-list';

export const palindrome = <T> (xs: T[]) =>
	equalLists(xs, reverse(xs))
;
