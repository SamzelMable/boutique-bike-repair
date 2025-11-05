import React from 'react';


export default function Shop(){
const items = [
{id:1, title:'Handmade Saddle', price:45},
{id:2, title:'Ceramic-coated Chain', price:30}
];
return (
<div className="page shop">
<h2>Shop</h2>
<div className="product-grid">
{items.map(i=> (
<div key={i.id} className="product">
<img src={`/shop/${i.id}.jpg`} alt="product" />
<h4>{i.title}</h4>
<div className="price">€{i.price}</div>
<button>Add to cart</button>
</div>
))}
</div>
</div>
);
}