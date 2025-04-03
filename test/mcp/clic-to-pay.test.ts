import { VisaMCP } from '../../src/mcp/visa-mcp';


describe('Click To Pay flow', () => {

    it('Should authenticate, list cards and charge', async () => {
        const mcp = new VisaMCP({ apiKey: 'test-api-key' });

        await mcp.session.load();
        await mcp.session.authenticateInFrame();

        const cards = await mcp.cards.getCards();
        expect(cards).toHaveLength(2);

        const result = await mcp.payments.charge({ cardId: cards[0].id, amount: 100, currency: 'USD' });
        expect(result).toHaveProperty('transactionId');

        await mcp.session.end();
    });

});