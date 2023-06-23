import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Habit from './pages/Habit';
import Profile from './pages/profile';
import Todo from './pages/Doing';
import Add from './pages/Add';
import Home from './pages/Home';
import SignInSide from './pages/SignInSide';
import Edit from './pages/Edit';
import Metrics from './pages/Metrics';
import Signup from './pages/Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './components/Navbar/LoginContainer';
import DefaultContainer from './components/Navbar/DefaultContainer';
import { SecureRoute } from './Auth/SecureRoute';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <Routes>
      <Route element={<LoginContainer/>}>
              <Route exact path='' element={<SignInSide />} />  
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Logout' element={<Logout/>} />
      </Route>
      <Route element={<DefaultContainer/>}>
        <Route path='home' element={<SecureRoute><Home /></SecureRoute>} />
        <Route path='add' element={<SecureRoute><Add /></SecureRoute>} />
        <Route path='edit' element={<SecureRoute><Edit /></SecureRoute>} />
        <Route path='habit' element={<SecureRoute><Habit /></SecureRoute>} />
        <Route path='profile' element={<SecureRoute><Profile /></SecureRoute>} />
        <Route path='doing' element={<SecureRoute><Todo /></SecureRoute>} />
        <Route path='metrics' element={<SecureRoute><Metrics /></SecureRoute>} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;