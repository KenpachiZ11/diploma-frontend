import React, {useState, useEffect} from 'react';
import { Layout } from './components/Layout/Layout';
import './App.scss';
import Context from './Context';
import API from './Api';

import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About/About';
import { Contacts } from './pages/Contacts/Contacts';
import { Home } from './pages/Home/Home';
import { SinglePageCard } from './pages/SinglePageCard/SinglePageCard';
import { FormCard } from './pages/FormCard/FormCard';
import { FeedbackAdmin } from './pages/FeedbackAdmin/FeedbackAdmin';
import { Person } from './pages/Person/Person';
import { Auth } from './pages/Auth/Auth';


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const api = new API();

  useEffect(()=> {
    console.log(user);
  }, [user])

  return (
    <Context.Provider value={{
      api,
      user, 
      setUser
    }}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/about/:id' element={<SinglePageCard/>} />
          <Route path='/form' element={<FormCard/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/feedback-admin' element={<FeedbackAdmin/>} />
          <Route path='/person' element={<Person/>} />
          <Route path='/auth' element={<Auth/>} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;