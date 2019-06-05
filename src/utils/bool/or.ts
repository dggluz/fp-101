import { curry } from '../fns/curry';

export const or = curry((x: boolean, y: boolean) =>
	x || y
);
