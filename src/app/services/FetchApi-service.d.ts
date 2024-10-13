export declare class FetchApi {
    private constructor();
    static fetchApiResponse<T>(url: string, result?: T, method?: string, body?: string, headers?: Record<string, string>, includeCredentials?: boolean): Promise<T>;
}
