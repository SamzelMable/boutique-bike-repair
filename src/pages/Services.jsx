import React from 'react';
import ServiceCard from '../ui/ServiceCard';


const SERVICES = [
{id:'tune', title:'Basic Tune', price:45, desc:'Brakes, gears, safety check.'},
{id:'overhaul', title:'Full Overhaul', price:180, desc:'Strip, clean, replace worn parts, reassemble.'},
{id:'custom', title:'Custom Build', price:1200, desc:'Frame + build tailored to rider.'}
];


export default function Services(){
return (
<div className="page services">
<h2>Services</h2>
<div className="service-grid">
{SERVICES.map(s => <ServiceCard key={s.id} service={s} />)}
</div>
</div>
);
}