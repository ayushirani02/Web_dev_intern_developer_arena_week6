import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";


export default function Navbar() {
const { cart } = useContext(CartContext);
const { user, login, logout } = useContext(AuthContext);


return (
<nav style={styles.nav}>
<Link to="/" style={styles.logo}>MyStore</Link>


<div style={styles.links}>
<Link to="/cart">Cart ({cart.length})</Link>
{user ? (
<button onClick={logout}>Logout ({user.username})</button>
) : (
<button onClick={() => login("demoUser")}>Login</button>
)}
</div>
</nav>
);
}


const styles = {
nav: {
display: "flex",
justifyContent: "space-between",
padding: "10px 20px",
background: "#222",
color: "white",
},
logo: {
color: "white",
textDecoration: "none",
fontSize: "20px",
},
links: {
display: "flex",
gap: "15px",
},
};
