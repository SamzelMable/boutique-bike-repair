import React from 'react';
import CTA from '../ui/CTA';


export default function Home(){
return (
<div className="page home">
<section className="hero">
<div className="hero-inner">
<h2>Local repairs. Custom frames. No nonsense.</h2>
<p>We restore cherished bikes, build one-offs, and offer honest tune-ups — same day where possible.</p>
<CTA/>
</div>
<div className="hero-image">
<img src={`${process.env.PUBLIC_URL}/hero-bike.jpg`} alt="custom frame" />
</div>
</section>


<section className="features">
<article>
<h3>Repairs</h3>
<p>From punctures to full overhauls. Clear pricing and photos before/after.</p>
</article>
<article>
<h3>Custom Builds</h3>
<p>Tell us your dream bike. We sketch, quote, and build.</p>
</article>
<article>
<h3>Parts & Accessories</h3>
<p>Curated parts store — tested and chosen for longevity.</p>
</article>
</section>
</div>
);
}