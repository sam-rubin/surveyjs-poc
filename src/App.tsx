import React from 'react';
import logo from './logo.svg';
import { Error } from './Error';

import './App.css';
import {Login} from './components/login/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
interface IUser {
  name: string,
  email: string
}
function App() {
const [user,setUser]  = useState({});
  return (
   <div>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login setUser={setUser}></Login>} />
         <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
