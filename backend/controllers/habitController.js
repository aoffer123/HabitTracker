const habitModel = require('../models/habit');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const getAllHabits = async (req,res) =>{
    const userId = jwt.decode(req.cookies.jwt, process.env.KEY).id;
    const habits = await habitModel.find({userId: userId}).sort({createdAt: -1});
    res.status(200).json(habits);
};

const getHabit = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No habit found"});
    }
    const habit = await habitModel.findById(id);

    if(!habit) {
        return res.status(404).json({error: "No habit found"});
    }
    
    res.status(200).json(habit);
};

const createHabit = async (req,res) =>{
    const {name,description,category,importance,date} = req.body;
    const userId = jwt.decode(req.cookies.jwt, process.env.KEY).id;
    try {
        const newHabit = await habitModel.create({name,userId,description,category,importance,date});
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

const completeHabit = async (req, res) => {
    const {id, date} = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(500).json({error: "No habit found"});
    }

    dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-US"); // Convert to MM/DD/YYYY format

    const habit = await habitModel.findById(id);
    
    let completionDates = habit.completionDates;
    let metrics = habit.metrics;
    
    if (!completionDates.includes(formattedDate)) {
        // Have not completed on this day yet, post the new date and metric information.
        // Get the day of the week
        const dayNumber = dateObj.getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = daysOfWeek[dayNumber];
        console.log(dayName)
        metrics.set(dayName, String(metrics.get(dayName) + 1));

        completionDates.push(formattedDate);
        completionDates.sort((a, b) => {
            let dateA = new Date(a);
            let dateB = new Date(b);
            return dateA - dateB;
        });

        console.log(completionDates);
        metrics['Streak'] = currentStreak(completionDates);
        metrics.set('Streak', currentStreak(completionDates))
        metrics.set('Consistency', percentageLast30Days(completionDates))
        habit.completionDates = completionDates;
        habit.metrics = metrics;
        console.log(metrics)
        await habit.save();
        res.status(200).json({ message: 'Habit updated' });
    }
    else {
        res.status(500).json({ message: 'Date already recorded' });
    }
}

function currentStreak(dates) {
    let currentStreak = 1;

    for (let i = dates.length - 1; i > 0; i--) {
        const currentDate = new Date(dates[i]);
        const previousDate = new Date(dates[i - 1]);

        const diff = currentDate - previousDate;

        const diffDays = diff / (1000 * 60 * 60 * 24);

        if (diffDays === 1) {
            currentStreak++;
        } else {
            break;
        }
    }

    return currentStreak;
}

function percentageLast30Days(dates) {
    let count = 0;
    let today = new Date(dates[dates.length - 1]); 
    let thirtyDaysAgo = new Date(dates[dates.length - 1]); 
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30); 

    for (let d = thirtyDaysAgo; d <= today; d.setDate(d.getDate() + 1)) {
        const dateString = d.toLocaleDateString("en-US"); // Convert to MM/DD/YYYY format

        if (dates.includes(dateString)) {  // Search for in our completed days
            count++;
        }
    }

    return (count / 30) * 100; 
}



module.exports = {
    createHabit,
    getHabit,
    getAllHabits,
    deleteHabit,
    updateHabit,
    completeHabit
}

