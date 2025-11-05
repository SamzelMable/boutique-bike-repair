import React from 'react';
import GalleryGrid from '../ui/GalleryGrid';


const IMAGES = [
'/gallery/gallery1.jpg','/gallery/gallery2.jpg','/gallery/gallery3.jpg','/gallery/gallery4.jpg','/gallery/gallery5.jpg','/gallery/gallery6.jpg','/gallery/gallery7.jpg','/gallery/gallery8.jpg',,'/gallery/gallery9.jpg','/gallery/gallery10.jpg'
];


export default function Gallery(){
return (
<div className="page gallery">
<h2>Before & After</h2>
<p>Slide to compare work. High-res photos optimised for web.</p>
<GalleryGrid images={IMAGES} />
</div>
);
}