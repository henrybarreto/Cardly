import Router from '@koa/router';
import CardController from '../controllers/card.js';
import CardCore from '../core/card.js';

const router = new Router();
const controller = new CardController(new CardCore());

router.post('card', controller.path.post, controller.createCard);
/* router.get('card', controller.path.get, controller.readCard);
router.put('card', controller.path.put, controller.updateCard);
router.delete('card', controller.path.delete, controller.deleteCard);*/

export default router;
