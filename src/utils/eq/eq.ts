import { curry } from '../fns/curry';

interface TypeOfEq {
	<A> (x: A, y: A): boolean;
	<A> (x: A): (y: A) => boolean;
}

export const eq: TypeOfEq = curry((x: any, y: any) =>
	x === y
);
