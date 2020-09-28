import CardModel from '../database/models/card.js';
/**
 * Bussiness logic of card
 */
class CardCore {
  /**
   * Set the class variables and binding
   */
  constructor() {
    this.model = CardModel;
  }
  /**
   * Create a card on database
   * @param {string} cardFront
   * @param {string} cardBack
   * @param {number} cardDeck
   */
  async createCard(cardFront, cardBack, cardDeck) {
    const card = await this.model.create(
        {front: cardFront, back: cardBack, deckId: cardDeck});
    return card;
  }
}

export default CardCore;
