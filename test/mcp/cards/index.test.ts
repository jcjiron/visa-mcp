import { HttpClient } from '../../../src/http/HttpClient.interface';
import { AxiosHttpClient } from '../../../src/http/axios.plugin';
import { Cards } from '../../../src/mcp/cards';


describe('Cards test', () => {
    let client: HttpClient;

    beforeEach(() => {
        client = new AxiosHttpClient('https://api.visa.com', 'apiKey');
    });

    it('Should get cards', async () => {

        const cards = new Cards(client);

        const result = await cards.getCards();

        expect(result).toHaveLength(2);
    });
});