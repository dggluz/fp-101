import { curry, flip, pow } from '@utils';

const flippedPow = flip(pow);
const curriedFlippedPow = curry(flippedPow);

export const square = curriedFlippedPow(2);
