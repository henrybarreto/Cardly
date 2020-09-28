import DeckModel from '../database/models/deck.js';
/**
 * Bussiness logic of deck
 */
class DeckCore {
  /**
   * Set the class variables and binding
   */
  constructor() {
    this.model = DeckModel;
  }
  /**
   * Create a deck on database
   * @param {string} name
   */
  async createDeck(name) {
    const deck = await this.model.create({name: name});
    return deck;
  }
}

export default DeckCore;
