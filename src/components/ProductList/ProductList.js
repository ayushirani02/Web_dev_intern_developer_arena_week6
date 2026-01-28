import React from "react";
import ProductCard from "../ProductCard/ProductCard";


export default function ProductList({ products }) {
return (
<div style={styles.grid}>
{products.map((product) => (
<ProductCard key={product.id} product={product} />
))}
</div>
);
}


const styles = {
grid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
gap: "20px",
padding: "20px",
},
};
