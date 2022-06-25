import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from './Test';
import Message from './Message';
import Login from './Login';
import ChooseContact from './ChooseContact';

function App() {

  localStorage.setItem('server','https://e3d0-27-34-50-109.in.ngrok.io');

  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Test" element={<Test/>} />
            <Route path="/Message" element={<Message/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/ChooseContact" element={<ChooseContact/>}/>
          </Routes>
        </div> 
      </BrowserRouter>
  );
}

export default App;
