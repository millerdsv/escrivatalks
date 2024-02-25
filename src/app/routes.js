const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/receiver', controller.getMessageResponse);
//router.get('/:id', controller.getPontosById);

module.exports = router;