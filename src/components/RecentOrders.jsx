import React from 'react';

const RecentOrders = () => {
  const recentOrders = [
    {
      id: 1,
      restaurant: 'Pizza Palace',
      distance: '2.5 km away',
      status: 'In Progress',
      statusCode: 'P'
    },
    {
      id: 2,
      restaurant: 'Sushi Express',
      distance: '1.8 km away',
      status: 'Delivered',
      statusCode: 'S'
    },
    {
      id: 3,
      restaurant: 'Taco Fiesta',
      distance: '3.2 km away',
      status: 'Delivered',
      statusCode: 'T'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-200">
      <h3 className="text-lg font-medium mb-4 dark:text-white">Your Recent Orders</h3>
      
      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              order.status === 'In Progress' 
                ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300' 
                : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
            }`}>
              {order.statusCode}
            </div>
            <div className="flex-1">
              <h4 className="font-medium dark:text-white">{order.restaurant}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{order.distance}</p>
            </div>
            <div className={`text-sm font-medium ${
              order.status === 'In Progress' 
                ? 'text-yellow-600 dark:text-yellow-400' 
                : 'text-green-600 dark:text-green-400'
            }`}>
              {order.status}
            </div>
          </div>
        ))}
      </div>
      
      <button className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-4 hover:text-indigo-800 dark:hover:text-indigo-300">
        View All
      </button>
    </div>
  );
};

export default RecentOrders;