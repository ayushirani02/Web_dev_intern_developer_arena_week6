import React, { useState } from "react";


export default function Checkout({ onSubmit }) {
const [form, setForm] = useState({
name: "",
address: "",
card: "",
});


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const handleSubmit = (e) => {
e.preventDefault();
if (!form.name || !form.address || !form.card) {
alert("All fields are required");
return;
}
onSubmit();
};


return (
<form onSubmit={handleSubmit} style={styles.form}>
<input name="name" placeholder="Full Name" onChange={handleChange} />
<input name="address" placeholder="Address" onChange={handleChange} />
<input name="card" placeholder="Card Number" onChange={handleChange} />
<button type="submit">Place Order</button>
</form>
);
}


const styles = {
form: {
display: "flex",
flexDirection: "column",
gap: "10px",
maxWidth: "300px",
},
};
