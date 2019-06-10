import { Fn1 } from './fns';

// tslint:disable: trailing-comma

interface ComposeLtrType {
	<A, B, C, D, E, F, G, H, I, J, K>(
		f: Fn1<A, B>,
		g: Fn1<B, C>,
		h: Fn1<C, D>,
		i: Fn1<D, E>,
		j: Fn1<E, F>,
		k: Fn1<F, G>,
		l: Fn1<G, H>,
		m: Fn1<H, I>,
		n: Fn1<I, J>,
		o: Fn1<J, K>
	): Fn1<A, K>;

	<A, B, C, D, E, F, G, H, I, J>(
		f: Fn1<A, B>,
		g: Fn1<B, C>,
		h: Fn1<C, D>,
		i: Fn1<D, E>,
		j: Fn1<E, F>,
		k: Fn1<F, G>,
		l: Fn1<G, H>,
		m: Fn1<H, I>,
		n: Fn1<I, J>
	): Fn1<A, J>;

	<A, B, C, D, E, F, G, H, I>(
		f: Fn1<A, B>,
		g: Fn1<B, C>,
		h: Fn1<C, D>,
		i: Fn1<D, E>,
		j: Fn1<E, F>,
		k: Fn1<F, G>,
		l: Fn1<G, H>,
		m: Fn1<H, I>
	): Fn1<A, I>;

	<A, B, C, D, E, F, G, H>(
		f: Fn1<A, B>,
		g: Fn1<B, C>,
		h: Fn1<C, D>,
		i: Fn1<D, E>,
		j: Fn1<E, F>,
		k: Fn1<F, G>,
		l: Fn1<G, H>
	): Fn1<A, H>;

	<A, B, C, D, E, F, G>(
		f: Fn1<A, B>,
		g: Fn1<B, C>,
		h: Fn1<C, D>,
		i: Fn1<D, E>,
		j: Fn1<E, F>,
		k: Fn1<F, G>
	): Fn1<A, G>;

	<A, B, C, D, E, F>(
		f: Fn1<A, B>,
		g: Fn1<B, C>,
		h: Fn1<C, D>,
		i: Fn1<D, E>,
		j: Fn1<E, F>
	): Fn1<A, F>;

	<A, B, C, D, E>(
		f: Fn1<A, B>,
		g: Fn1<B, C>,
		h: Fn1<C, D>,
		i: Fn1<D, E>
	): Fn1<A, E>;

	<A, B, C, D>(
		f: Fn1<A, B>,
		g: Fn1<B, C>,
		h: Fn1<C, D>
	): Fn1<A, D>;

	<A, B, C>(
		f: Fn1<A, B>,
		g: Fn1<B, C>
	): Fn1<A, C>;

	<A, B>(
		f: Fn1<A, B>
	): Fn1<A, B>;
}
export const composeLtr: ComposeLtrType = (...fns: Array<((...args: any[]) => any)>) =>
	(...args: any[]) =>
		fns.reduce(
			(res, fn) =>
			[fn.call(null, ...res)],
			args)[0]
;
