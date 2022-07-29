import React from 'react';
import Navigation from './pages/Navigation/Navigation';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Shop from './pages/Shop/Shop';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
