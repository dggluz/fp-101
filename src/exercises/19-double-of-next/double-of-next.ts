// import { compose } from '@utils';
import { next } from '../03-next/next';
import { double } from '../04-double/double';
import { compose } from '../18-compose/compose';

export const doubleOfNext = compose(double, next);
