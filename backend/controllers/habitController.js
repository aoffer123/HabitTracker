const habitModel = require('../models/habit');
const mongoose = require('mongoose');


const getAllHabits = async (req,res) =>{
    const habits = await habitModel.find({}).sort({createdAt: -1});
    res.status(200).json(habits);
};

const getHabit = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No habit found"});
    }

    const habit = habitModel.findById(id);
    if(!habit) {
        return res.status(404).json({error: "No habit found"});
    }
    res.status(200).json(habit);
};

const createHabit = async (req,res) =>{
    const {name,userId,description,category,importance,date} = req.body;
    try {
        const newHabit = await habitModel.create({name,description,category,importance,date});
        res.status(200).json(newHabit);
    } catch (e) {
        res.status(400).json({error: e.message});
    }
}

const deleteHabit = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No habit found"});
    }

    const habit = await habitModel.findOneAndDelete({_id: id});
    if(!habit) {
        return res.status(404).json({error: "No habit found"});
    }

    res.status(200).json(habit);
}

const updateHabit = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No habit found"});
    }

    const habit = await habitModel.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!habit) {
        return res.status(404).json({error: "No habit found"});
    }

    res.status(200).json(habit);
    
}


module.exports = {
    createHabit,
    getHabit,
    getAllHabits,
    deleteHabit,
    updateHabit
}

