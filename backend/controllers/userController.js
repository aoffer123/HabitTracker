const bcrypt = require('bcrypt');
const User = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, hashedPassword });
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
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!user){
        res.status(500).json({
            message: "Login Failed",
            error: "User not found"
        })
    }else{
        bcrypt.compare(hashedPassword, user.password)
            .then((result) =>{
                if(result){
                    const token = jwt.sign(
                        {id: user._id, name, role: user.role},
                        process.env.KEY
                    );
                    res.cookie("jwt", token, {
                        httpOnly: true,
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

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a user by name
const updateUser = async (req, res) => {
  try {
    const { name, email, password, id } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return res.status(500).json({ message: 'User not found' });
    }

    // Update user fields
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password ? await bcrypt.hash(password, 10) : user.password;
    
    const updatedUser = await User.findByIdAndUpdate(id, user);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(500).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};