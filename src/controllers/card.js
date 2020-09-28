/**
 * Controlling request and response data from Koa.js router
 */
class CardController {
  /**
   * Reciving depencies
   * @param {CardCore} cardCore;
   */
  constructor(cardCore) {
    this.core = cardCore;
    this.path = {
      get: '/cards/:card',
      post: '/card',
      put: '/card/:card',
      delete: '/card/:card',
    };

    this.createCard = this.createCard.bind(this);
  }
  /**
   * Creating a card
   * @param {Context} context
   */
  async createCard(context) {
    try {
      const cardInfo = context.request.body;
      const cardFront = cardInfo.front;
      const cardBack = cardInfo.back;
      const cardDeck = cardInfo.deckId;
      const card = await this.core.createCard(cardFront, cardBack, cardDeck);
      console.log(card);
      context.body = card;
    } catch (error) {
      context.body = {msg: 'Error!'};
      console.error(error);
    }
  }
}

export default CardController;
