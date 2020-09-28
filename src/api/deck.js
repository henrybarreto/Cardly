import Router from '@koa/router';
import DeckController from '../controllers/deck.js';
import DeckCore from '../core/deck.js';

const router = new Router();
const controller = new DeckController(new DeckCore());

router.post('deck', controller.path.post, controller.createDeck);
/* router.get('deck', controller.path.get, controller.readDeck);
router.put('deck', controller.path.put, controller.updateDeck);
router.delete('deck', controller.path.delete, controller.deleteDeck);*/

export default router;
