import { curry } from '../fns/curry';

export const mod = curry((x: number, y: number) =>
	x % y
);
