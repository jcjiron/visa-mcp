import { VisaMCPConfig } from "@src/config/VisaConfig";
import { HttpClient } from "@src/http/HttpClient.interface";
import { AxiosHttpClient } from "@src/http/axios.plugin";
import { Session } from "./session";
import { Cards } from "./cards";
import { Payments } from "./payments";



export class VisaMCP {
    public session: Session;
    public cards: Cards;
    public payments: Payments;

    constructor(config: VisaMCPConfig) {

        if (!config.apiKey) {
            throw new Error('API key is required');
        }

        const client: HttpClient = new AxiosHttpClient('https://api.visa.com', config.apiKey);

        this.session = new Session(client);
        this.cards = new Cards(client);
        this.payments = new Payments(client);
    }
}