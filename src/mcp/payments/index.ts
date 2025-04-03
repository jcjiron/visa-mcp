import { HttpClient } from "@src/http/HttpClient.interface";

export class Payments {
    private client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    public async charge(chargeRequest: ChargeRequest): Promise<ChargeResult> {
        return Promise.resolve({
            status: "SUCCESS",
            transactionId: "1234567890"
        });
    }
}