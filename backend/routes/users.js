const express = require('express');
const {createUser, loginUser, deleteUser, updateUser} = require('../controllers/userController');
const router = express.Router();

router.post('/login', loginUser);

router.post('/register', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);



module.exports = router;