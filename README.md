# Cryptocurrency Price Tracker

This application allows users to track the prices of the top 100 cryptocurrencies. Users can select a fiat currency (USD, EUR, CNY) for the prices and view details such as price, market cap, daily volume, and other information for each cryptocurrency.

Features
List of the top 100 cryptocurrencies
Selection of fiat currency for prices (USD, EUR, CNY)
Detailed information display for each cryptocurrency
User authentication (login/register)
Protected routes requiring authentication for access
Technologies Used
Frontend
React (with Vite for build tooling)
Styled Components for styling
Axios for API requests
Redux Toolkit for state management
React Router DOM for routing
Toast notifications for alerts
Backend
Node.js
Express.js
MongoDB for storing user information
Mongoose for MongoDB object modeling
JWT for authentication
Password hashing for user security
Installation
Frontend
Clone the repository: git clone https://github.com/nikolakenjic/cryptocurrency.git
Navigate to the frontend directory: cd cryptocurrency/frontend
Install dependencies: npm install or yarn install
Set up environment variables if necessary
Start the frontend server: npm start or yarn start
Backend
Navigate to the backend directory: cd cryptocurrency/backend
Install dependencies: npm install or yarn install
Create a .env file based on the provided .env.example template and fill in the following variables:
