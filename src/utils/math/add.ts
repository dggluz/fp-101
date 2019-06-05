import { curry } from '../fns/curry';

export const add = curry((x: number, y: number) =>
	x + y
);
