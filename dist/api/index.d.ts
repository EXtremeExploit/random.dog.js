export declare class Dog {
    url: string;
}

export declare class Api {
    private baseUrl;
    constructor();


    /**
     * Makes an HTTP request to the random.dog API.
     * 
     * @param endpoint The URL of the random.dog API.
     * @returns A Promise object that will resolve to the result from the API call.
     */
    private apiCall(endpoint);


    /**
     * Makes a call to `/woof.json`.
     */
    getDog(): Promise<Dog>;

}
export declare function api(): Api;
