import { HttpClient } from "@src/http/HttpClient.interface";

export class Session {
    private client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    public async load(): Promise<void> {
        return;
    }

    public async authenticateInFrame(): Promise<void> {
        return;
    }

    public async end(): Promise<void> {
        return;
    }
}