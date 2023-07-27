import React from "react";
import {Route, Routes, Navigate } from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css'
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  
  const {user} = useAuthContext()


  return <Box width="400px" sx={{width: {xl :'1488px' }}} m="auto">
    <Navbar />
    <Routes>
        <Route path="/" element={user? <Home/> : <Navigate to='/login' />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>} />
        <Route path="/login" element={!user? <Login/> : <Navigate to='/'/>}/>
        <Route path="/signup" element={!user? <Signup/> : <Navigate to='/'/>}/>
    </Routes>
    <Footer />
  </Box>;
};

export default App;
