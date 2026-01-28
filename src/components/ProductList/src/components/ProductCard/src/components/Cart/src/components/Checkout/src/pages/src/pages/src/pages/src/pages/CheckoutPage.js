import React, { useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import { CartContext } from "../contexts/CartContext";


export default function CheckoutPage() {
const { clearCart } = useContext(CartContext);


const handleOrder = () => {
alert("Order placed successfully!");
clearCart();
};


return (
<div style={{ padding: 20 }}>
<h2>Checkout</h2>
<Checkout onSubmit={handleOrder} />
</div>
);
}
