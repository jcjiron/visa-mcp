import { AxiosHttpClient } from "../../../src/http/axios.plugin";
import { HttpClient } from "../../../src/http/HttpClient.interface";
import { Payments } from "../../../src/mcp/payments";


describe('Paymemts tests', () => {

    let client: HttpClient;

    beforeEach(() => {
        client = new AxiosHttpClient('https://api.visa.com', 'apiKey');
    });

    it('Should instantiate without error', async () => {

        const payments = new Payments(client);

        expect(payments).not.toBeNull();
    });

});