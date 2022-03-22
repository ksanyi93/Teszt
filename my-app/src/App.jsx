import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Scheme from './Pages/Scheme';
import Adatok from './Pages/Adatok';


function App() {
  return (
    <React.Fragment>
      <header>
        <div class="head1">GeeksforGeeks</div>
        <div class="head2">A computer science portal for geeks</div>
    </header>
     
    <BrowserRouter>
    <div class="menu">
        <Link to="/">HOME</Link>
        <Link to="news">NEWS</Link>
        <Link to="noti">NOTIFICATIONS</Link>
        <div class="menu-log">
            <Link to="login">LOGIN</Link>
        </div>
    </div>
    

    <Routes>

    <Route path="/" element={ <Scheme title={Adatok.home.title} body={Adatok.home.body} lapok={Adatok.home.lapok} /> }/>

    <Route path="news" element={ <Scheme title={Adatok.news.title} body={Adatok.news.body} lapok={Adatok.news.lapok}/> }/>

    <Route path="noti" element={ <Scheme title={Adatok.noti.title} body={Adatok.noti.body} lapok={Adatok.noti.lapok}/> }/>

    <Route path="login" element={ <Scheme title={Adatok.login.title} body={Adatok.login.body} lapok={Adatok.login.lapok}/> }/>

    </Routes>
     
    
    
     
    </BrowserRouter>

    <footer>Footer Section</footer>
    </React.Fragment>
  );
}

export default App;
