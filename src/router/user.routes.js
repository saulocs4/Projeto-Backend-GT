const express = require('express');
const userControllers = require('../controllers/user'); 

const router = express.Router();

router.get('/:id', userControllers.getUserByIdController);
router.post('/', userControllers.createUserController);
router.put('/:id', userControllers.updateUserController);
router.delete('/:id', userControllers.deleteUserController);

module.exports = router;