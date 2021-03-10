const express = require('express');
const controller = require('../controllers')

const router = express.Router();

router.post('/add', controller.users.create);
router.get('/get', controller.users.all);
router.get('/get/:id', controller.users.get);
router.put('/update/:id', controller.users.update);
router.delete('/remove/:id', controller.users.remove);

module.exports = router;
