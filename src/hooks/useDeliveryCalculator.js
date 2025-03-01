import { useState, useEffect } from 'react';

export const useDeliveryCalculator = (distance, cuisine) => {
  const [deliveryTimes, setDeliveryTimes] = useState({
    totalTime: 0,
    preparationTime: 0,
    transitTime: 0,
    deliveryWindow: 0,
  });

  useEffect(() => {

    // let prepTime = 15; 
    
    // switch (cuisine) {
    //   case 'Fast Food':
    //     prepTime = 10;
    //     break;
    //   case 'Pizza':
    //     prepTime = 20;
    //     break;
    //   case 'Sushi':
    //     prepTime = 25;
    //     break;
    //   case 'Fine Dining':
    //     prepTime = 30;
    //     break;
    //   default:
    //     prepTime = 15;
    // }
    

    const total = Math.round(distance * 10);
    

    // const window = 7;
    

    // const total = prepTime + transit + window;
    
    setDeliveryTimes({
      totalTime: total,
      preparationTime: Math.round(total*0.6),
      transitTime: Math.round(total*0.3),
      deliveryWindow: Math.round(total*0.1),
    });
  }, [distance, cuisine]);

  return deliveryTimes;
};