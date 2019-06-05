import { curry } from '../fns/curry';

export const and = curry((x: boolean, y: boolean) =>
	x && y
);
