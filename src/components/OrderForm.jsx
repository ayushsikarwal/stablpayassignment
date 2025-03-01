import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';

const OrderForm = ({ initialDistance, initialCuisine, onSubmit }) => {
  const [distance, setDistance] = useState(initialDistance);
  const [cuisine, setCuisine] = useState(initialCuisine);
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const newErrors = {};
    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    onSubmit(distance, cuisine);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <MapPin className="text-gray-400 dark:text-gray-500 mr-2" size={18} />
            <h3 className="text-lg font-medium dark:text-white">You Order</h3>
          </div>
          <div className="text-3xl font-bold mb-4 dark:text-white">{distance} km</div>
          
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Delivery Address
            </label>
            <input
              type="text"
              id="address"
              className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="distance" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Distance (km)
            </label>
            <input
              type="number"
              id="distance"
              min="0.1"
              step="0.1"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">1 km = 10 min delivery time</p>
          </div>
          
          <div className="mb-4">
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Restaurant Type
            </label>
            <select
              id="cuisine"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="Fast Food">Fast Food</option>
              <option value="Pizza">Pizza</option>
              <option value="Sushi">Sushi</option>
              <option value="Fine Dining">Fine Dining</option>
            </select>
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <Clock className="text-gray-400 dark:text-gray-500 mr-2" size={18} />
            <h3 className="text-lg font-medium dark:text-white">Delivery time</h3>
          </div>
          <div className="text-3xl font-bold mb-4 dark:text-white">
            {Math.round(distance * 10)} minutes
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors dark:bg-indigo-700 dark:hover:bg-indigo-800 mt-4"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default OrderForm;