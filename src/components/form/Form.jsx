import React, { useState } from "react";
import "./form.css";
const Form = (props) => {
    const {transactions, setTransactions}= props
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // update formData using spread operator(...) and dynamic object properties
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:8000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        return resp.json;
      })
      .then((transaction) => {
        console.log(transaction);
        setTransactions([...transactions, transaction])
      }).catch();
  };
  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="formControls">
          <input
            type="date"
            placeholder="date"
            name="date"
            value={formData.date}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={formData.description}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="category"
            name="category"
            value={formData.category}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="number"
            placeholder="amount"
            name="amount"
            value={formData.amount}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="submit">
          <button type="submit">Add new Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
