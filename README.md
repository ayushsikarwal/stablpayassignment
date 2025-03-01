## Overview

StaplEat is a modern, responsive food delivery tracking application built with React and Tailwind CSS. It allows users to place food delivery orders, track their estimated delivery times, and view their order history.

## Features

- **Order Placement**: Input delivery details including address, distance, and restaurant type
- **Delivery Time Calculation**: Intelligent estimation of delivery times based on distance and cuisine type
- **Delivery Breakdown**: Detailed breakdown of preparation time, transit time, and delivery window
- **Order History**: View past orders with restaurant and price information
- **Recent Orders**: Track the status of recent orders (In Progress/Delivered)
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preferences
- **Responsive Design**: Fully responsive layout that works on mobile and desktop devices

## Technologies Used

- **React**: Frontend library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Lightweight icon library
- **Vite**: Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stapleat.git
   cd stapleat
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
stapleat/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── DeliveryBreakdown.jsx
│   │   ├── OrderForm.jsx
│   │   ├── OrderHistory.jsx
│   │   ├── RecentOrders.jsx
│   │   ├── Sidebar.jsx
│   │   └── ThemeToggle.jsx
│   ├── hooks/
│   │   └── useDeliveryCalculator.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Usage

1. **Place an Order**:
   - Enter your delivery address
   - Adjust the distance (in km)
   - Select a restaurant type
   - Click "Continue" to see the delivery breakdown

2. **View Delivery Breakdown**:
   - See the estimated preparation time
   - Check the transit time based on distance
   - View the delivery window
   - See the total estimated delivery time

3. **Toggle Dark/Light Mode**:
   - Click the sun/moon icon in the header to switch between dark and light themes

## Custom Hooks

### useDeliveryCalculator

This custom hook calculates delivery times based on:
- Distance from the restaurant
- Type of cuisine (different preparation times)

It returns:
- Total delivery time
- Food preparation time
- Transit time
- Delivery window
