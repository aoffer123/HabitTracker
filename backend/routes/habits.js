const express = require('express');
const habitModel = require('../models/habit');
const {createHabit, getAllHabits, getHabit, deleteHabit, updateHabit} = require('../controllers/habitController');
const router = express.Router();

router.get('/', getAllHabits);

router.post('/', createHabit);

router.get('/:id', getHabit);

router.delete('/:id', deleteHabit);

router.patch('/:id', updateHabit);



module.exports = router;