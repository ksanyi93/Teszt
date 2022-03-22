import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageSchema from './Pages/PageSchema';
import Budapest from './Pages/Budapest';
import Db from './Pages/Db';


function App() {

  //hagyományos Javascript szintaxis
  
  return (
    <React.Fragment>

        <header>
          <h2>Cities</h2>
        </header>

        <BrowserRouter>
        <section>
          <nav>
            <ul>
              <li>
                <Link to="/">London</Link></li>
              <li>
                <Link to="/paris">Paris</Link></li>
              <li>
                <Link to="/tokyo">Tokyo</Link></li>
                <li>
                  <Link to="/budapest">Budapest</Link></li>
                  <li>
                  <Link to="/moscow">Moscow</Link></li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/tokyo" element={ <PageSchema title="Tokyo" body="Tokyo  historically known in the West as Tokio and officially the Tokyo Metropolis , is the capital, the largest city, and the most populous metropolitan area in the Greater Tokyo Area, the Kantō region, and Japan, as well as the most populous metropolitan area in the world[8] and most populous prefecture of Japan."/> }/>

            <Route path="/paris" element={ <PageSchema title="Paris" body="Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents as of 1 January 2019 in an area of more than 105 square kilometres (41 square miles).[4] Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts."/> }/>

            <Route path="/" element={ <PageSchema title="London" body="London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants."/> }/>

            <Route path="/budapest" element={ <Budapest/> }/>

            <Route path="/moscow" element={ <PageSchema title={Db.moscow.title} body={Db.moscow.body} /> }/>

          </Routes>
        </section>
        </BrowserRouter>

        <footer>
          <p>Footer</p>
        </footer>
    </React.Fragment>
  );
}

export default App;
