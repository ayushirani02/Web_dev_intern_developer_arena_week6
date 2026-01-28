import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { CartContext } from "../contexts/CartContext";


export default function ProductDetail() {
const { id } = useParams();
const [product, setProduct] = useState(null);
const { addToCart } = useContext(CartContext);


useEffect(() => {
fetchProductById(id).then(setProduct);
}, [id]);


if (!product) return <p>Loading...</p>;


return (
<div style={{ padding: 20 }}>
<img src={product.image} alt={product.title} height="200" />
<h2>{product.title}</h2>
<p>{product.description}</p>
<p>₹ {product.price}</p>
<button onClick={() => addToCart(product)}>Add to Cart</button>
</div>
);
  }
