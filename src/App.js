import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Habit from './pages/Habit';
import Profile from './pages/profile';
import Todo from './pages/Doing';
import Add from './pages/Add';
import Home from './pages/Home';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home/>} />
        <Route path='add' element={<Add/>} />
        <Route path='habit' element={<Habit/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='doing' element={<Todo />} />
      </Routes>
    </Router>
  );
}
  
export default App;