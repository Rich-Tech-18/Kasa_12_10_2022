import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Appartement from './pages/Appartement';
import Header from './compenents/Header';
import Footer from './compenents/Footer';
import Error404 from './compenents/Error/404';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Header />
      <Routes>
        <Route  path="/" exact element={<Home />}></Route>
        <Route path="/appartement/:idAppartement" element={<Appartement />}></Route>
        <Route path="/APropos" element={<Apropos />}></Route>
        <Route path="/404" element={<Error404 />}></Route>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
