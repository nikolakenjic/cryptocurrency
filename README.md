# Cryptocurrency Price Tracker

This application allows users to track the prices of the top 100 cryptocurrencies. Users can select a fiat currency (USD, EUR, CNY) for the prices and view details such as price, market cap, daily volume, and other information for each cryptocurrency.

## Features

- List of the top 100 cryptocurrencies
- Selection of fiat currency for prices (USD, EUR, CNY)
- Detailed information display for each cryptocurrency
- User authentication (login/register)
- Protected routes requiring authentication for access

## Technologies Used

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

## Installation

### Frontend

1. Clone the repository: `git clone https://github.com/nikolakenjic/cryptocurrency.git`
2. Navigate to the frontend directory: `cd cryptocurrency/frontend`
3. Install dependencies: `npm install` or `yarn install`
4. Set up environment variables if necessary
5. Start the frontend server: `npm start` or `yarn start`

### Backend

1. Navigate to the backend directory: `cd cryptocurrency/backend`
2. Install dependencies: `npm install` or `yarn install`
3. Create a `.env` file based on the provided `.env.example` template and fill in the following variables:
   - `PORT=3000`
   - `MONGODB_URL=<your_mongodb_url>`
   - `JWT_SECRET=<your_jwt_secret_code>`
   - `JWT_EXPIRES=<your_jwt_expiration_time>`
   - `CMC_PRO_API_KEY=<your_coinmarketcap_api_key>`
4. Start the server: `npm run dev`
