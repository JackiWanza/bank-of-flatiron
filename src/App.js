import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
const App = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((resp) => {
        return resp.json();
      })
      .then((transactions) => {
        console.log(transactions);
        setTransactions(transactions);
      })
      .catch();
  }, []);

  // setvalue function to update state
  // value is the state
  //   usestate expects default value/any type
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    // const name=e.target.name
    // const value=e.target.value
    setValue(e.target.value);
  };
  return (
    <div>
      <Header />
      <SearchBar value= {value} setValue={setValue} handleChange={handleChange}/>
      <Form transactions={transactions} setTransactions={setTransactions} />
      <Table transactions={transactions} value={value}/>
    </div>
  );
};

export default App;
