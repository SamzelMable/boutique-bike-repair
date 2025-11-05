import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(){
return (
<header className="site-header">
<div className="brand">
<img src="/logo-placeholder.jpg" alt="logo" className="logo" />
<div>
<h1>Boutique Bike Repair</h1>
<p className="tag">Custom frames. Honest service.</p>
</div>
</div>
<nav>
<Link to="/">Home</Link>
<Link to="/services">Services</Link>
<Link to="/booking">Book</Link>
<Link to="/gallery">Gallery</Link>
<Link to="/shop">Shop</Link>
</nav>
</header>
);
}