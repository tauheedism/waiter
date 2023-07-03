import React, { useState } from "react";

const OrderForm = ({ tables, onAddOrder }) => {
  const [orderId, setOrderId] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [selectedDish, setSelectedDish] = useState("");
  const [selectedTable, setSelectedTable] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      orderId,
      dishPrice,
      selectedDish,
      selectedTable,
    };
    onAddOrder(orderData);
    setOrderId("");
    setDishPrice("");
    setSelectedDish("");
    setSelectedTable("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Dish Price"
        value={dishPrice}
        onChange={(e) => setDishPrice(e.target.value)}
      />
      <select
        value={selectedDish}
        onChange={(e) => setSelectedDish(e.target.value)}
      >
        <option value="">Choose a Dish</option>
        <option value="Dish 1">Dish 1</option>
        <option value="Dish 2">Dish 2</option>
        <option value="Dish 3">Dish 3</option>
      </select>
      <select
        value={selectedTable}
        onChange={(e) => setSelectedTable(e.target.value)}
      >
        <option value="">Choose a Table</option>
        {tables.map((table) => (
          <option key={table} value={table}>
            Table {table}
          </option>
        ))}
      </select>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
