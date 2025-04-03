import { AxiosHttpClient } from "../../../src/http/axios.plugin";
import { HttpClient } from "../../../src/http/HttpClient.interface"
import { Session } from "../../../src/mcp/session";






describe('Session tests', () => {
    let client: HttpClient;

    beforeEach(() => {
        client = new AxiosHttpClient('https://api.visa.com', 'apiKey');
    })

    it('Should instantiate without error', async () => {

        const session = new Session(client);

        expect(session).not.toBeNull();

    })
})