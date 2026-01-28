React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export default function Cart() {
const { cart, removeFromCart } = useContext(CartContext);


return (
<div>
{cart.map((item) => (
<div key={item.id} style={styles.item}>
<span>import{item.title} (x{item.quantity})</span>
<button onClick={() => removeFromCart(item.id)}>Remove</button>
</div>
))}
</div>
);
}


const styles = {
item: {
display: "flex",
justifyContent: "space-between",
padding: "10px",
borderBottom: "1px solid #ccc",
},
};
