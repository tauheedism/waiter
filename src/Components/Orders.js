import React,{ useState} from 'react';

const Orders = ({ orders, deleteOrder }) => {
  const [tableNumber, setTableNumber] = useState('');

  const handleTableNumberChange = (e) => {
    setTableNumber(e.target.value);
  };

  const filteredOrders = orders.filter(
    (order) => order.tableNumber === tableNumber
  );

  return (
    <div>
      <h2>Orders Component</h2>
      <label>
        Table Number:
        <select value={tableNumber} onChange={handleTableNumberChange}>
          <option value="">Select Table</option>
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        </select>
      </label>
      <br />
      {tableNumber && (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Dish Name</th>
              <th>Dish Price</th>
              <th>Table Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.dishName}</td>
                <td>{order.dishPrice}</td>
                <td>{order.tableNumber}</td>
                <td>
                  <button onClick={() => deleteOrder(order)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;
