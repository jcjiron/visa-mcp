import { HttpClient } from "@src/http/HttpClient.interface";
import { Card } from "@src/models/Card";

export class Cards {
    private client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    public async getCards(): Promise<Card[]> {
        return Promise.resolve([
            {
                id: '1',
                number: '4111111111111111',
                expirationDate: '12/25',
                cardholderName: 'John Doe'
            },
            {
                id: '2',
                number: '5500000000000004',
                expirationDate: '11/24',
                cardholderName: 'Jane Smith'
            }
        ]);
    }
}