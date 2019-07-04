import { compose, curry, eq, flip, mod } from '@utils';

export const even = compose(eq(0), curry(flip(mod))(2));
