import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";


export default function ProductCard({ product }) {
const { addToCart } = useContext(CartContext);


return (
<div style={styles.card}>
<img src={product.image} alt={product.title} style={styles.image} />
<h3>{product.title}</h3>
<p>₹ {product.price}</p>
<div style={styles.actions}>
<Link to={`/product/${product.id}`}>View</Link>
<button onClick={() => addToCart(product)}>Add</button>
</div>
</div>
);
}


const styles = {
card: {
border: "1px solid #ddd",
padding: "15px",
borderRadius: "8px",
display: "flex",
flexDirection: "column",
justifyContent: "space-between",
},
image: {
height: "150px",
objectFit: "contain",
},
actions: {
display: "flex",
justifyContent: "space-between",
},
};
