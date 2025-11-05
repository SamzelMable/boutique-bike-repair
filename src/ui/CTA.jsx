import React from 'react';
import { Link } from 'react-router-dom';
export default function CTA(){
return (
<div className="cta">
<Link to="/booking" className="btn">Book a tune</Link>
<Link to="/gallery" className="btn ghost">See gallery</Link>
</div>
);
}
