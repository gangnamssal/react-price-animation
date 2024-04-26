export type ArrayUnion<T extends readonly unknown[]> = T extends readonly [infer A, ...infer B]
	? A | ArrayUnion<B>
	: never;
