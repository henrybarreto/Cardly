import Router from '@koa/router';
import CardRoutes from './card.js';
import DeckRoutes from './deck.js';

const router = new Router();
router.use(CardRoutes.routes());
router.use(DeckRoutes.routes());
export default router;
