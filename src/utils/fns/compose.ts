import { Fn1 } from './fns';

// tslint:disable: trailing-comma

interface ComposeType {
	<A, B, C, D, E, F, G, H, I, J, K>(
		f: Fn1<J, K>,
		g: Fn1<I, J>,
		h: Fn1<H, I>,
		i: Fn1<G, H>,
		j: Fn1<F, G>,
		k: Fn1<E, F>,
		l: Fn1<D, E>,
		m: Fn1<C, D>,
		n: Fn1<B, C>,
		o: Fn1<A, B>
	): Fn1<A, K>;

	<A, B, C, D, E, F, G, H, I, J>(
		f: Fn1<I, J>,
		g: Fn1<H, I>,
		h: Fn1<G, H>,
		i: Fn1<F, G>,
		j: Fn1<E, F>,
		k: Fn1<D, E>,
		l: Fn1<C, D>,
		m: Fn1<B, C>,
		n: Fn1<A, B>
	): Fn1<A, J>;

	<A, B, C, D, E, F, G, H, I>(
		f: Fn1<H, I>,
		g: Fn1<G, H>,
		h: Fn1<F, G>,
		i: Fn1<E, F>,
		j: Fn1<D, E>,
		k: Fn1<C, D>,
		l: Fn1<B, C>,
		m: Fn1<A, B>
	): Fn1<A, I>;

	<A, B, C, D, E, F, G, H>(
		f: Fn1<G, H>,
		g: Fn1<F, G>,
		h: Fn1<E, F>,
		i: Fn1<D, E>,
		j: Fn1<C, D>,
		k: Fn1<B, C>,
		l: Fn1<A, B>
	): Fn1<A, H>;

	<A, B, C, D, E, F, G>(
		f: Fn1<F, G>,
		g: Fn1<E, F>,
		h: Fn1<D, E>,
		i: Fn1<C, D>,
		j: Fn1<B, C>,
		k: Fn1<A, B>
	): Fn1<A, G>;

	<A, B, C, D, E, F>(
		f: Fn1<E, F>,
		g: Fn1<D, E>,
		h: Fn1<C, D>,
		i: Fn1<B, C>,
		j: Fn1<A, B>
	): Fn1<A, F>;

	<A, B, C, D, E>(
		f: Fn1<D, E>,
		g: Fn1<C, D>,
		h: Fn1<B, C>,
		i: Fn1<A, B>
	): Fn1<A, E>;

	<A, B, C, D>(
		f: Fn1<C, D>,
		g: Fn1<B, C>,
		h: Fn1<A, B>
	): Fn1<A, D>;

	<A, B, C>(
		f: Fn1<B, C>,
		g: Fn1<A, B>
	): Fn1<A, C>;

	<A, B>(
		f: Fn1<A, B>
	): Fn1<A, B>;
}

export const compose: ComposeType = (...fns: Array<((...args: any[]) => any)>) =>
	(...args: any[]) =>
		fns.reduceRight(
			(res, fn) =>
				[fn.call(null, ...res)],
			args)[0]
;
