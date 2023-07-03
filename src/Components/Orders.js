import React from 'react';

const Orders = ({ orders, onDeleteOrder }) => {
  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order.orderId}>
          <p>Order ID: {order.orderId}</p>
          <p>Dish Price: {order.dishPrice}</p>
          <p>Selected Dish: {order.selectedDish}</p>
          <p>Selected Table: {order.selectedTable}</p>
          <button onClick={() => onDeleteOrder(order.orderId)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Orders;
