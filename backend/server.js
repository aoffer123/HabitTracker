// set up express and env file 
const express = require('express');
// use to connect to db
const mongoose = require('mongoose');
require('dotenv').config();
const habitRouter = require('./routes/habits');
const userRouter = require('./routes/users');
const cookieParser = require('cookie-parser');

const habitTrackerApp = express();



habitTrackerApp.use(express.json());

habitTrackerApp.use((req,res,next) => {
    console.log(req.path, req.method);
    console.log(req.cookies);
    next();
});

// routing
habitTrackerApp.use('/api/habits',habitRouter);
habitTrackerApp.use('/api/users',userRouter);
habitTrackerApp.use(cookieParser());
// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        habitTrackerApp.listen(process.env.PORT,()=>{
            console.log("We did it")
        });
    })
    .catch((e) => {
        console.log(e);
    })


