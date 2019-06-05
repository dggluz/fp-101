import { curry } from '../fns/curry';

export const pow = curry((x: number, y: number) =>
	Math.pow(x, y)
);
