const express = require('express');
const {createUser, loginUser, deleteUser, updateUser, getUser} = require('../controllers/userController');
const router = express.Router();

router.post('/login', loginUser);

router.get('/', getUser);

router.post('/register', createUser);

router.delete('/', deleteUser);

router.patch('/', updateUser);



module.exports = router;