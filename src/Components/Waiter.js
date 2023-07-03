import React , {useState} from "react";



const Waiter = () => {
    const [orderId,setOrderId]=useState('')
    const [dishName,setDish]=useState('')
    const [dishPrice,setPrice]=useState('')
    const [table,setTable]=useState('')

    // const handleSubmit=()=>{
    //     const order={
    //         orderId,
    //         dishName,
    //         dishPrice,
    //         table
    //     }
    // }

    const handlerForm=(e)=>{
        e.preventDefault();
        const order={orderId,dishName,dishPrice,table}
        const tableOrders=JSON.parse(localStorage.getItem('orders'))||[];
        tableOrders.push(order);
        localStorage.setItem('orders',JSON.stringify(tableOrders))
        setOrderId('');
        setDish('');
        setPrice('');
        setTable('')
    }
  return (
    <React.Fragment>
      <form onSubmit={handlerForm}>
        <label htmlFor="">
          Choose a unique id:
          <input 
          type="number" 
          name="orderId"
          value={orderId}
          onChange={(e)=>setOrderId(e.target.value)} />
        </label>
        <label htmlFor="">
          Choose price:
          <input 
          type="text"
          name="dishPrice"
          value={dishPrice}
          onChange={(e)=>setPrice(e.target.value)}
          
          />
        </label>
        <label htmlFor="">
          Choose dish:
          <input type="text"
          name="dishName" 
          value={dishName}
          onChange={(e)=>setDish(e.target.value)}/>
        </label>
        <label htmlFor="">
          Choose table: 
          <select name="table" value={table} onChange={(e)=>setTable(e.target.value)}>
            <option value="">Select Table</option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3 </option>
          </select>
        </label>
        <button type="submit">Add to table</button>
      </form>
    </React.Fragment>
  );
};

export default Waiter;
