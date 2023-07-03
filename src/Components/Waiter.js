import React, { useState } from "react";

const OrderForm = ({ updateOrders }) => {
  const [orderId, setOrderId] = useState('');
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const handleOrderIdChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleDishNameChange = (e) => {
    setDishName(e.target.value);
  };

  const handleDishPriceChange = (e) => {
    setDishPrice(e.target.value);
  };

  const handleTableNumberChange = (e) => {
    setTableNumber(e.target.value);
  };

  const handleAddOrder = () => {
    const order = {
      orderId,
      dishName,
      dishPrice,
      tableNumber,
    };

    updateOrders((orders) => [...orders, order]);

    setOrderId('');
    setDishName('');
    setDishPrice('');
    setTableNumber('');
  };

  return (
    <div>
      <h2>Welcome to the Tauheed Restaurent</h2>
      <p>Please fill order details</p>
      <label>
        Order ID:
        <input type="text" value={orderId} onChange={handleOrderIdChange} />
      </label>
      
      <label>
        Dish Name:
        <select value={dishName} onChange={handleDishNameChange}>
          <option value="">Select your favourite dish</option>
          <option value="Deg ka Korma"> Deg ka Korma</option>
          <option value="Nahari">Nahari</option>
          <option value="Chicken fry">Chicken fry</option>
          <option value="Nalli Nahari">Nalli Nahari</option>
          <option value="Shahi paneer">Shahi paneer</option>
          <option value="Rabdi">Rabdi</option>
          <option value="Chicken changezi">Chicken changezi</option>
          <option value="Chicken Barra">Chicken Barra</option>
          <option value="Seek kavab">Seek kavab</option>
          <option value="Gulab jamun">Gulab jamun</option>
        </select>
      </label>
      
      <label>
        Dish Price:
        <input type="text" value={dishPrice} onChange={handleDishPriceChange} />
      </label>
      
      <label>
        Table Number:
        <select value={tableNumber} onChange={handleTableNumberChange}>
          <option value="">Select Table</option>
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        </select>
      </label>
    
      <button onClick={handleAddOrder}>Add Order</button>
    </div>
  );
}

export default OrderForm;
