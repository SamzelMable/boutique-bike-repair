import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import Header from './components/Header';


export default function App(){
return (
<div className="app-root">
<Header />
<main className="container">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/services" element={<Services/>} />
<Route path="/booking" element={<Booking/>} />
<Route path="/gallery" element={<Gallery/>} />
</Routes>
</main>
<Footer />
</div>
);
}