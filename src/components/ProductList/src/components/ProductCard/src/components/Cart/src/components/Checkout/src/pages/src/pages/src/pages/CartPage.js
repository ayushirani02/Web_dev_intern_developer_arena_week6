import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart/Cart";


export default function CartPage() {
return (
<div style={{ padding: 20 }}>
<h2>Your Cart</h2>
<Cart />
<Link to="/checkout">Go to Checkout</Link>
</div>
);
}
