import React from 'react';

const OrderHistory = () => {
  const historyOrders = [
    {
      id: 1,
      restaurant: 'Pizza Palace',
      item: 'Large Pepperoni',
      price: 18.99,
      code: 'P'
    },
    {
      id: 2,
      restaurant: 'Burger Joint',
      item: 'Double Cheeseburger',
      price: 12.50,
      code: 'B'
    },
    {
      id: 3,
      restaurant: 'Smoothie Bar',
      item: 'Berry Blast',
      price: 7.25,
      code: 'S'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-200">
      <h3 className="text-lg font-medium mb-4 dark:text-white">Order History</h3>
      
      <div className="space-y-4">
        {historyOrders.map((order) => (
          <div key={order.id} className="flex items-center py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3 text-gray-600 dark:text-gray-300">
              {order.code}
            </div>
            <div className="flex-1">
              <h4 className="font-medium dark:text-white">{order.restaurant}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{order.item}</p>
            </div>
            <div className="font-medium dark:text-white">
              ${order.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;