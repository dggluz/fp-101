import { compose } from '@utils';
import { next } from '../03-next/next';
import { double } from '../04-double/double';

export const nextOfDouble = compose(next, double);
