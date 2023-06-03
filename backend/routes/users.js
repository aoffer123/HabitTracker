const express = require('express');
const {createUser, loginUser, deleteUser, updateUser} = require('../controllers/userController');
const router = express.Router();

router.get('/login', loginUser);

router.post('/register', createUser);

router.delete('/delete', deleteUser);

router.patch('/update', updateUser);



module.exports = router;