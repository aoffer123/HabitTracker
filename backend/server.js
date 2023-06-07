// set up express and env file 
const express = require('express');
// use to connect to db
const mongoose = require('mongoose');
require('dotenv').config();
const habitRouter = require('./routes/habits');
const userRouter = require('./routes/users');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const habitTrackerApp = express();

const corsOptions = {
    origin: [
        "http://localhost:3000"
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"]

};

habitTrackerApp.use(express.json());
habitTrackerApp.use(cookieParser());

habitTrackerApp.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});

// routing
habitTrackerApp.use('/api/habits',cors(corsOptions) ,habitRouter);
habitTrackerApp.use('/api/users' ,userRouter);

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


