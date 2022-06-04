import * as express from 'express';
import MatchesController from '../controllers/matchesController';

const matchesController = new MatchesController();

const router = express.Router();

router.get('/', matchesController.getAll);

export default router;