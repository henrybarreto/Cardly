/**
 * Controlling request and response data from Koa.js router
 */
class DeckController {
  /**
   * Reciving depencies
   * @param {DeckCore} deckCore
   */
  constructor(deckCore) {
    this.core = deckCore;
    this.path = {
      get: '/decks/:deck',
      post: '/deck',
      put: '/deck/:deck',
      delete: '/deck/:deck',
    };

    this.createDeck = this.createDeck.bind(this);
  }
  /**
   * Creating deck
   * @param {Context} context
   */
  async createDeck(context) {
    console.log(context);
    try {
      const deckInfo = context.request.body;
      const deckName = deckInfo.name;
      const deck = await this.core.createDeck(deckName);
      context.response.body = deck;
    } catch (error) {
      console.error(error);
    }
  }
}

export default DeckController;
