import React from 'react';
import GalleryGrid from '../ui/GalleryGrid';


const IMAGES = [
  `${process.env.PUBLIC_URL}/gallery/gallery1.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery2.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery3.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery4.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery5.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery6.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery7.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery8.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery9.jpg`,
  `${process.env.PUBLIC_URL}/gallery/gallery10.jpg`
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