/** Declaration file generated by dts-gen */
declare module 'random.dog.js' {
	function api(): Api;

	class Api {
		getDog(): Promise<Dog>
	}
}

export class Dog {
	url: string;
}