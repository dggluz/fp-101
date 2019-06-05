import { curry } from '../fns/curry';

export const eq: <A> (x: A, y: A) => boolean = curry((x: any, y: any) =>
	x === y
);
