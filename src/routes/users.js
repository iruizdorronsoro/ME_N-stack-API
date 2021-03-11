const express = require('express');
const controller = require('../controllers')

const router = express.Router();

router.post('/user', controller.users.create);
router.get('/users', controller.users.all);
router.get('/users/:dni', controller.users.get);
router.put('/users/:dni', controller.users.update);
router.delete('/users/:dni', controller.users.remove);

module.exports = router;
