import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home'
import Detail from './pages/details/Details'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/detail/:id' element={<Detail />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
