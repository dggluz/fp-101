import { curry } from '../fns/curry';

export const concat = curry((x: string, y: string) =>
	x + y
);
