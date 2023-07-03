import React from "react";

const Orders = ({orders,onDeleteOrder}) => {
  
  return (
    <React.Fragment>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            <div>Order ID:{order.orderId} </div>
            <div>Dish Price :{order.dishPrice} </div>
            <div>Dish Name:{order.dishName} </div>
            <div> Table:{order.table} </div>
            <button
              type="button"
              onClick={() => onDeleteOrder(order.orderId)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Orders;
