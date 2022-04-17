const router = require('express').Router();
const rootController = require('../controllers/root');

router.get('/', rootController.home);
router.get('/game', rootController.game);

module.exports = router;