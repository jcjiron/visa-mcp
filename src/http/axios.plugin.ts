import { HttpClient } from '@src/http/HttpClient.interface';
import axios, { AxiosInstance } from 'axios';

export class AxiosHttpClient implements HttpClient {
    private client: AxiosInstance;
    private apiKey: string;
    private baseURL: string;

    constructor(baseURL: string, apiKey: string) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.client = this.getAxiosClient(baseURL);
    }

    private getAxiosClient(baseURL: string, accessToken: string = ""): AxiosInstance {
        return axios.create({
            baseURL,
            headers: {
                Authorization: accessToken ? `Bearer ${accessToken}` : undefined
            }
        });
    }

    async get<T>(url: string, config?: any): Promise<T> {
        const response = await this.client.get<T>(url, config);
        return response.data;
    }

    async post<T>(url: string, data: any, config?: any): Promise<T> {
        const response = await this.client.post<T>(url, data, config);
        return response.data;
    }

    async put<T>(url: string, data: any, config?: any): Promise<T> {
        const response = await this.client.put<T>(url, data, config);
        return response.data;
    }

    async delete<T>(url: string, config?: any): Promise<T> {
        const response = await this.client.delete<T>(url, config);
        return response.data;
    }
}
