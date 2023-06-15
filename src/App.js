import './App.css';
import './index.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorComponent from './Feature/error.composant/error.composant';
import HomeComponent from './Feature/home.composant/home.composant';
import HeaderComposant from './Layout/header.composant/header.composant';
import ProposComponent from './Feature/propos.composant/propos.composant';
import Footer from './Layout/footer.layout/footer.layout';
import CardDetails from './Feature/details.composant/details.composant';

function App() {
  return (
    <div className='main_container'>
      <div className="content">
        <BrowserRouter>
          <HeaderComposant />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/propos" element={<ProposComponent />} />
            <Route exact path="/card/:id" element={<CardDetails />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}


export default App;
