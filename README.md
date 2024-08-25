# Cryptocurrency Price Tracker

- This application allows users to track the prices of the top 100 cryptocurrencies.
- Users can select a fiat currency (USD, EUR, CNY etc.) for the prices and view details such as price, market cap, daily volume, and other information for each cryptocurrency.

## Features

- List of the top 100 cryptocurrencies
- Selection of fiat currency for prices (USD, EUR, CNY etc.).
- Detailed information display for each cryptocurrency
- User authentication (login/register)
- Protected routes requiring authentication for access

# Technologies Used

### Frontend

- React (with Vite for build tooling)
- Styled Components for styling
- Axios for API requests
- Redux Toolkit for state management
- React Router DOM for routing
- Toast notifications for alerts

### Backend

- Node.js
- Express.js
- MongoDB for storing user information
- Mongoose for MongoDB object modeling
- JWT for authentication
- Password hashing for user security

# Installation

- Clone the repository: **git clone https://github.com/nikolakenjic/cryptocurrency.git**
- Open folder in VS Code
- Navigate to the frontend directory: **cd client**
- Install dependencies: **npm install**
- Back to the cryptocurrency folder **cd ..**
- Install dependencies: **npm install**

### Create a .env file based on the provided .env.example template and fill in the following variables:

- PORT=3000
- MONGODB_URL=Start the backend server: npm start or yarn start
- JWT_SECRET=<your_jwt_secret_code>
- JWT_EXPIRES=<your_jwt_expiration_time>
- CMC_PRO_API_KEY=<your_coinmarketcap_api_key>

### Start App

- Start the server: **npm run dev**

> > > > > > > 97ebff175f9bc9dfe626fb1a6deb8cb38ffcd9b3
