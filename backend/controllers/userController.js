const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({ name, email, hashedPassword });
    const user = await User.create({ name, email, password:hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user, takes username and password
const loginUser = async (req, res) => {
    const { name , password } = req.body;
    if(!name || !password){
        return res.status(500).json({
            message: "Username or Password Required"
        })
    }
    
    try {
  
    const user = await User.findOne({ name });
    if (!user){
        res.status(500).json({
            message: "Login Failed",
            error: "User not found"
        })
    }else{
        bcrypt.compare(password, user.password)
            .then((result) =>{
              
                if(result){
                  
                    const token = jwt.sign(
                        {id: user._id, name,password:password, role: user.role},
                        process.env.KEY
                    );
                    
                    res.cookie("jwt", token, {
                        // httpOnly: true,
                        // secure: true
                    })
                    res.status(200).json({
                        message: "Login Sucessful",
                        user: user._id,
                        name: user.name
                    })
                } 
                else {
                    res.status(500).json({
                        message: "Login Failed",
                        error: "Incorrect Password"
                    })
                }
            })
    }

    //res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUsers = async (req, res) => {
  const { name , password } = req.body;
  if(!name || !password){
      return res.status(500).json({
          message: "Username or Password Required"
      })
  }
  
  try {
    
  const user = {_id: "647e438df58bcaa72107721d", role: "User",name:"test", password:"$2b$10$X5T6D.QWX.FapmmEQzA37Omt7hdCkHjmIZSpT2GpeF/bkEBAmogoq"};
  if (!user){
      res.status(500).json({
          message: "Login Failed",
          error: "User not found"
      })
  }else{
    
      const result = await bcrypt.compare(password, user.password)
              
              if(result){
                  return {
                      message: "Login Sucessful",
                      user: user._id,
                      name: user.name
                  }
              
              } 
              else {
                  return {
                    message: "Login Failed",
                    error: "Incorrect Password"
                  }
              }
  }
} catch (error) {
  res.status(500).json({ error: error.message });
}

};

const createUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({ name, email, hashedPassword });
    const user = { name, email};
    
    return user
  } catch (error) {
    return{ error: "Failed to Create User" };
  }
};


// Update a user by name
const updateUser = async (req, res) => {
  try {
    const {username,email,password} = req.body;
    const userId = jwt.decode(req.cookies.jwt, process.env.KEY).id;
    const currentPass = jwt.decode(req.cookies.jwt, process.env.KEY).password;
    // Update user fields
    if(password === currentPass){
      const user = await User.findByIdAndUpdate({_id:userId},{name:username,email});
      res.status(200).json(user);
    }else{
      const hashedpass = await bcrypt.hash(password, 10);
      console.log({name:username,email,password:hashedpass})
      const user = await User.findByIdAndUpdate({_id:userId},{name:username,email,password:hashedpass});
      const token = jwt.sign(
        {id: user._id, name:username ,password:password, role: user.role},
        process.env.KEY
        );
        res.cookie("jwt", token, {
            // httpOnly: true,
            // secure: true
        })
      res.status(200).json(user);
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  
  try {
    const userId = jwt.decode(req.cookies.jwt, process.env.KEY).id;
    const user = await User.findByIdAndDelete({_id:userId});
    if (!user) {
      return res.status(500).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const userId = jwt.decode(req.cookies.jwt, process.env.KEY).id;
  const password = jwt.decode(req.cookies.jwt, process.env.KEY).password;
  try {
    const user = await User.findById({_id:userId});
    if (!user) {
      return res.status(500).json({ message: 'User not found' });
    }
    res.status(200).json({name:user.name,email:user.email,password:password})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  createUsers,
  updateUser,
  deleteUser,
  loginUser,
  loginUsers,
  getUser
};