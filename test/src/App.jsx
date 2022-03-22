import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Data from './Cars-pages/Data';
import Schema from './Cars-pages/Schema';
import GetContent from './Cars-pages/GetContent';



function Cars() {
  return (
    <React.Fragment>
      <header>
        <h2>American cars brand</h2>
      </header>

      <BrowserRouter>
      <section>
        <nav>
          <ul>
            <li>
               <Link to="/">Ford</Link>
            </li>
            <li>
            <Link to="/dodge">Dodge</Link>
            </li>
            <li>
            <Link to="/chevrolet">Chevrolet</Link>
            </li>
            <li>
            <Link to="/jeep">Jeep</Link>
            </li>
            <li>
            <Link to="/tesla">Tesla</Link>
            </li>
            <li>
            <Link to="/content">Fetch</Link>
            </li>
          </ul>
        </nav>

        <Routes>

          <Route path="/" element={ <Schema title={Data.ford.title} body={Data.ford.body} cards={Data.ford.cards}/>}/>

          <Route path="/dodge" element={ <Schema title={Data.dodge.title} body={Data.dodge.body} cards={Data.dodge.cards}/> }/>

          <Route path="/chevrolet" element={ <Schema title={Data.chevrolet.title} body={Data.chevrolet.body} cards={Data.chevrolet.cards}/> }/>

          <Route path="/jeep" element={ <Schema title={Data.jeep.title} body={Data.jeep.body} cards={Data.jeep.cards}/> }/>

          <Route path="/tesla" element={ <Schema title={Data.tesla.title} body={Data.tesla.body} cards={Data.tesla.cards}/> }/>

          <Route path="/content" element={ <GetContent /> }/>

          <Route />

          
        </Routes>


      </section>
      </BrowserRouter>

      <footer>
          <p>Footer</p>
        </footer>
    </React.Fragment>
  );
}

export default Cars;