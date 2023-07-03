import React ,{useState,useEffect} from 'react'
import Orders from './Components/Orders';
import Waiter from './Components/Waiter';
const App = () => {

  const [orders, setOrders] = useState([]);
  const tables = [1, 2, 3]; // Replace this with the actual table data

  useEffect(() => {
    // Fetch orders from local storage when the component mounts
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleAddOrder = (orderData) => {
    const newOrder = { ...orderData };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <h1>Order Management</h1>
      <Waiter tables={tables} onAddOrder={handleAddOrder} />
      <Orders orders={orders} onDeleteOrder={handleDeleteOrder} />
    </div>
  );
};

export default App
