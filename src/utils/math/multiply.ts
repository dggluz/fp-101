import { curry } from '../fns/curry';

export const multiply = curry((x: number, y: number) =>
	x * y
);
