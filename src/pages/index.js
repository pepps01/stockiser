import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Splash from './auth/Splash';
import Adviser from './main/adviser/Adviser';
import Selector from './main/selector/Selector';
import Optimiser from './main/optimser/Optimiser';
import Dashboard from './main/dashboard/Dashboard';

function Pages() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/optimiser" element={<Optimiser />} />
            <Route path="/selector" element={<Selector />} />
            <Route path="/adviser" element={<Adviser />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Pages