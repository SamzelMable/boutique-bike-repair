import React from 'react';


export default function GalleryGrid({images}){
return (
<div className="gallery-grid">
{images.map((src, i)=> (
<figure key={i} className="thumb">
<img src={src} alt={`gallery ${i+1}`} />
</figure>
))}
</div>
);
}