import { instance } from "@/config/api";
import { BASE_URL } from "./base";

interface IApiRequest {
    get<T>(url: string): Promise<T>;

    post<T, K>(url: string, data: K, options?: any): Promise<T>;

    put<T, K>(url: string, data: K, options?: any): Promise<T>;

    delete<T>(url: string): Promise<T>;
    patch<T, K>(url: string, data: K, options?: any): Promise<T>;
}

class ApiRequestClient implements IApiRequest {
    async get<T>(url: string): Promise<T> {
        const response = await instance.get<T>(url);
        return response.data;
    }

    async post<T, K>(url: string, data?: K, options?: any): Promise<T> {
        const response = await instance.post<T>(url, data, options);
        return response.data;
    }

    async put<T, K>(url: string, data?: K, options?: any): Promise<T> {
        const response = await instance.put<T>(url, data, options);
        return response.data;
    }

    async delete<T>(url: string): Promise<T> {
        const response = await instance.delete<T>(url);
        return response.data;
    }

    async patch<T, K>(url: string, data?: K, options?: any): Promise<T> {
        const response = await instance.patch<T>(url, data, options);
        return response.data;
    }
}

class ApiRequestServer implements IApiRequest {

    private baseURL;

    constructor() {
        this.baseURL = BASE_URL
    }


    async get<T>(url: string, options?: RequestInit): Promise<T> {
        const response = await fetch(this.baseURL + url,  options);
        return await response.json();
    }

    async post<T, K>(url: string, data: K, options?: any): Promise<T> {
        const response = await fetch(this.baseURL + url, {
            method: 'POST',
            body: data,
            ...options
        });
        return await response.json()
    }

    async put<T, K>(url: string, data: K, options?: any): Promise<T> {
        const response = await fetch(this.baseURL + url, {
            method: 'PUT',
            body: data,
            ...options
        });
        return await response.json()
    }

    async delete<T>(url: string): Promise<T> {
        const response = await fetch(this.baseURL + url);
        return await response.json()
    }

    async patch<T, K>(url: string, data: K, options?: any): Promise<T> {
        const response = await fetch(this.baseURL + url, {
            method: "PATCH",
            body: data,
            ...options
        });

        return await response.json();
    }
}


const requestInstanceClient = new ApiRequestClient()
const requestInstanceServer = new ApiRequestServer()


export { requestInstanceClient, requestInstanceServer };
