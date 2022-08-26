import React from 'react';
import { BrowserRouter, Link, Route, Routes, Router } from 'react-router-dom';
 import './App.css';
 import FilmSearch from './Routes/FilmSearch'
 import FilmList from './Routes/FilmList'
 import Home from './Routes/Home';
import User from './Routes/Users';
 import Contact from './Routes/Contact';
 //import Notfound from './Routing/Notfound';
 //<FilmSearch/>

 function App() {

    return (
      <div className="App">
              <BrowserRouter>
      <div>
      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/FilmSearch'>Film Search</Link></li>
          <li><Link to='/FilmList'>Film List</Link></li>
          <li><Link to='/User'>User</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>

      </ul>
      </div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/FilmSearch' element={<FilmSearch />} />
      <Route path='/FilmList' element={<FilmList />} />
      <Route path='/Users/:id' element={<User />} />
      <Route path='/User' element={<User />} />
      <Route path='/Contact' element={<Contact />} />

      </Routes>

      </BrowserRouter>
        
    
      </div>

      
    );
     
    
    }

 export default App;