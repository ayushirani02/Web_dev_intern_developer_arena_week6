import React from "react";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList/ProductList";


export default function Home() {
const { products, loading } = useProducts();


if (loading) return <p>Loading products...</p>;


return <ProductList products={products} />;
}
