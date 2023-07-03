import React ,{useState,useEffect} from 'react'
import Orders from './Components/Orders';
import Waiter from './Components/Waiter';
const App = () => {

  const [orders, setOrders] = useState([]);
  const tables=[1,2,3]
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  const handleAddOrder=(orderData)=>{
    const newOrder ={...orderData};
    setOrders((prevOrders)=>[...prevOrders,newOrder])
  }

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };
  return (
    <React.Fragment>
      <Waiter tables={tables} onAddOrder={handleAddOrder} />
      <Orders orders={orders} onDeleteOrder={handleDeleteOrder} />
    </React.Fragment>
  )
}

export default App
