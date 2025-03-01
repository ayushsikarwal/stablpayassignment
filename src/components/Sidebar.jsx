import React from 'react';
import { Home, Heart, ShoppingBag, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-[100px] bg-white dark:bg-gray-800 shadow-md flex flex-col items-center py-8 hidden md:flex transition-colors duration-200">
      <div className="mb-12">
        <button className="bg-indigo-600 text-white p-3 rounded-lg font-bold">
          StaplEat
        </button>
      </div>
      
      <nav className="flex flex-col items-center space-y-8">
        <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-lg transition-colors flex flex-col items-center">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        
        <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-lg transition-colors flex flex-col items-center">
          <Heart size={20} />
          <span className="text-xs mt-1">Favorites</span>
        </button>
        
        <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-lg transition-colors flex flex-col items-center">
          <ShoppingBag size={20} />
          <span className="text-xs mt-1">Orders</span>
        </button>
        
        <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-lg transition-colors flex flex-col items-center">
          <Settings size={20} />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </nav>
      
      <button className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 p-2 rounded-lg transition-colors flex flex-col items-center mt-auto">
        <LogOut size={20} />
        <span className="text-xs mt-1">Log Out</span>
      </button>
    </div>
  );
};

export default Sidebar;