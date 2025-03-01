import React, { useState } from 'react';
import { MapPin, Clock, Package, History, Home, Heart, Settings, LogOut, ShoppingBag } from 'lucide-react';
import { useDeliveryCalculator } from './hooks/useDeliveryCalculator';
import OrderForm from './components/OrderForm';
import DeliveryBreakdown from './components/DeliveryBreakdown';
import RecentOrders from './components/RecentOrders';
import OrderHistory from './components/OrderHistory';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [distance, setDistance] = useState(5.2);
  const [cuisine, setCuisine] = useState('Fast Food');
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const { 
    totalTime, 
    preparationTime, 
    transitTime, 
    deliveryWindow 
  } = useDeliveryCalculator(distance, cuisine);

  const handleOrderSubmit = (formDistance, formCuisine) => {
    setDistance(formDistance);
    setCuisine(formCuisine);
    setOrderPlaced(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <header className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 transition-colors duration-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400">My reward points</h3>
                <h2 className="text-2xl font-bold dark:text-white">1250 pts</h2>
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button className="bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 px-4 py-2 rounded-full">Order</button>
                <button className="bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 px-4 py-2 rounded-full">Track</button>
              </div>
            </div>
          </header>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <OrderForm 
                initialDistance={distance} 
                initialCuisine={cuisine} 
                onSubmit={handleOrderSubmit} 
              />
              
              {orderPlaced && (
                <DeliveryBreakdown 
                  distance={distance}
                  totalTime={totalTime}
                  preparationTime={preparationTime}
                  transitTime={transitTime}
                  deliveryWindow={deliveryWindow}
                />
              )}
              
              <OrderHistory />
            </div>
            
            <div className="md:col-span-1">
              <RecentOrders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;