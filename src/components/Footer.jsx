import React from 'react';


export default function Footer(){
return (
<footer className="site-footer">
<div>© {new Date().getFullYear()} Boutique Bike Repair</div>
<div>Made with care — and a torque wrench.</div>
</footer>
);
}