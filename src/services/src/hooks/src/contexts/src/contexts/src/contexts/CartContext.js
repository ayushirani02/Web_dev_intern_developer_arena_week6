import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();


export function CartProvider({ children }) {
const [cart, setCart] = useState([]);


useEffect(() => {
const savedCart = localStorage.getItem("cart");
if (savedCart) {
setCart(JSON.parse(savedCart));
}
}, []);


useEffect(() => {
localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


const addToCart = (product) => {
setCart((prev) => {
const existing = prev.find((item) => item.id === product.id);
if (existing) {
return prev.map((item) =>
item.id === product.id
? { ...item, quantity: item.quantity + 1 }
: item
);
}
return [...prev, { ...product, quantity: 1 }];
});
};


const removeFromCart = (id) => {
setCart((prev) => prev.filter((item) => item.id !== id));
};


const clearCart = () => {
setCart([]);
};


return (
<CartContext.Provider
value={{ cart, addToCart, removeFromCart, clearCart }}
>
{children}
</CartContext.Provider>
);
}
