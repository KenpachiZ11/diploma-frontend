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
import { Author } from './pages/Author/Author';


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const [authors, setAuthors] = useState([]);
  const [content, setContent] = useState([]);
  const api = new API();

  useEffect(()=> {
    // console.log(user);
  }, [user])
  useEffect(() => {
    api.about()
      .then(json => {
        setContent(json)
        api.getUsers()
          .then(data => {
            const authors = data.filter(el => json.filter(d => d.userEmail === el.email).length)
            setAuthors(authors)
          })
      })
  }, [])

  return (
    <Context.Provider value={{
      api,
      user, 
      setUser,
      content,
      setContent,
      authors, 
      setAuthors
    }}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/about/:id' element={<SinglePageCard/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/person' element={<Person/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/author/:id' element={<Author/>} content={content}/>

          {user.status === 'author' && <Route path='/form' element={<FormCard/>} />}

          {user.status === 'admin' && <Route path='/form' element={<FormCard/>} />}
          {user.status === 'admin' && <Route path='/feedback-admin' element={<FeedbackAdmin/>} />}
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;