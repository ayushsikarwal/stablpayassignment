import React from 'react';

const DeliveryBreakdown = ({
  distance,
  totalTime,
  preparationTime,
  transitTime,
  deliveryWindow
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-200">
      <h3 className="text-lg font-medium mb-4 dark:text-white">Delivery Time Breakdown</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Food Preparation</span>
          <span className="font-medium dark:text-white">{preparationTime} min</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Transit Time</span>
          <span className="font-medium dark:text-white">{transitTime} min</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Delivery Window</span>
          <span className="font-medium dark:text-white">{deliveryWindow} min</span>
        </div>
        
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-gray-800 dark:text-gray-200 font-medium">Total Estimated Time</span>
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{totalTime} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBreakdown;