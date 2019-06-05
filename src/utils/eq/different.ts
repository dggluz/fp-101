import { curry } from '../fns/curry';

export const different = curry((x: any, y: any) =>
	x !== y
);
