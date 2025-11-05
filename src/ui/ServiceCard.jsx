import React from 'react';
export default function ServiceCard({service}){
return (
<div className="service-card">
<h3>{service.title}</h3>
<p>{service.desc}</p>
<div className="price">€{service.price}</div>
<a href="/booking" className="btn small">Book</a>
</div>
);
}