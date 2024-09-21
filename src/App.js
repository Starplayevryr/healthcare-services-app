import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import ServiceList from './ServiceList'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/services" element={<ServiceList />} />
      </Routes>
    </Router>
  );
};

export default App;
