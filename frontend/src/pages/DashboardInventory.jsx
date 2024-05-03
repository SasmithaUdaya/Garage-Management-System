import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DashboardInventory= () => {
    const [totalItemQuantity, setTotalItemQuantity] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [lowStockItems, setLowStockItems] = useState([]);
  
    useEffect(() => {
      const fetchItemQuantities = async () => {
        try {
          const res = await fetch('/backend/addinventory/items');
          const data = await res.json();
          if (res.ok) {
            const sum = data.reduce((acc, item) => acc + item.quantity, 0);
            setTotalItemQuantity(sum);
          }
        } catch (error) {
          console.error('Error fetching item quantities:', error);
        }
      };
  
      const fetchOrderCount = async () => {
        try {
          const res = await fetch('/backend/order/pendingorders');
          const data = await res.json();
          if (res.ok) {
            setTotalOrders(data.length);
          }
        } catch (error) {
          console.error('Error fetching order count:', error);
        }
      };
  
      const fetchLowStockItems = async () => {
        try {
          const res = await fetch('/backend/addinventory/lowstock');
          const data = await res.json();
          if (res.ok) {
            setLowStockItems(data);
          }
        } catch (error) {
          console.error('Error fetching low stock items:', error);
        }
      };
  
      fetchItemQuantities();
      fetchOrderCount();
      fetchLowStockItems();
    }, []);
  
    return (
      <div className="bg-black h-screen">
        
          <br /><br />
  
        <h1 className="text-3xl font-semibold mb-4 text-white text-center">Dashboard</h1><br />
        <div className="container mx-auto bg-white bg-opacity-80 p-8">
          <div className="flex justify-center gap-4 mb-4">
            <div className="bg-yellow-500 rounded-lg p-2 w-60 h-24 text-center">
              <p className="text-lg font-semibold text-black mt-4">Total Item Quantities</p>
              <p className="text-xl font-bold">{totalItemQuantity}</p>
            </div>
            <div className="bg-yellow-500 rounded-lg p-2 w-60 h-24 text-center">
              <p className="text-lg font-semibold text-black mt-4">Total Orders</p>
              <p className="text-xl font-bold">{totalOrders}</p>
            </div>
          </div><br />
          <div className="flex justify-between items-center mb-4">
            <Link to="/addinventory" className="bg-green-500 text-black py-2 px-4 rounded-md">
              + Add New Item
            </Link>
            <Link to="/item" className="bg-blue-500 text-black py-2 px-4 rounded-md">
              Item List
            </Link>
          </div><br />
          <h2 className="text-xl font-semibold mb-2 mt-7">Low Stock Items</h2>
          <table className="bg-gray-100 w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2 bg-black text-white">Item Name</th>
                <th className="border px-4 py-2 bg-black text-white">Current Quantity</th>
                <th className="border px-4 py-2 bg-black text-white">Category</th>
              </tr>
            </thead>
            <tbody>
              {lowStockItems.map((item) => (
                <tr key={item._id}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default DashboardInventory;
  
