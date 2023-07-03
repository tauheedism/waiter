import React ,{useState,useEffect} from 'react'
import Orders from './Components/Orders';
import Waiter from './Components/Waiter';
const App = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(fetchedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const updateOrders = (callback) => {
    setOrders(callback);
  };

  const deleteOrder = (order) => {
    const updatedOrders = orders.filter((o) => o !== order);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <Waiter updateOrders={updateOrders} />
      <hr />
      <Orders orders={orders} deleteOrder={deleteOrder} />
    </div>
  );
}

export default App
