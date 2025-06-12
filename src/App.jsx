import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Admissions from './Pages/AdmissionsPage';
import ContactPage from './Pages/ContactPage';
import CoursesPage from './Pages/CoursesPage';
import NotFound from './Pages/NotFoundPage';
import Headers from './Component/Header/Headers';
import Footer from './Component/Footer/Footers';


function App() {
  return (
  <BrowserRouter>
    
      <Headers/>
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/apply" element={<Admissions/>} />
          <Route path="/contact" element={<ContactPage/>} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
     <Footer/>
   </BrowserRouter>
  );
}

export default App;
