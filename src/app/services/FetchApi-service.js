export class FetchApi {
    constructor() { }
    static async fetchApiResponse(url, result, method = "GET", body, headers, includeCredentials) {
        const options = {
            method,
            headers
        };
        if (body !== null && body !== undefined) {
            options.body = body;
        }
        if (includeCredentials) {
            options.credentials = 'include';
        }
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                console.error(response.statusText);
                return Promise.resolve(result);
            }
            return response.json();
        }
        catch (error) {
            console.error(error);
        }
        return Promise.resolve(result);
    }
}
//# sourceMappingURL=FetchApi-service.js.map