import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Login} from './components/login/login';

interface IUser {
  name: string,
  email: string
}

function App() {
  const [user, setUser] = useState<IUser>({name:"sa",email:""});

  return (
    <div>
    <h1>Hello World</h1>
    <Login setUser={setUser}/>
     { user!.name}
     {user!.email}
    </div>
  );
}

export default App;
