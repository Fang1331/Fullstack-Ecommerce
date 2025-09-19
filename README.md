# Fullstack Ecommerce Project

This is a full-stack ecommerce project built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes a frontend for customers, an admin panel for managing products and orders, and a backend to handle the business logic.

## Project Structure

The project is divided into three main directories:

- `frontend`: Contains the customer-facing React application.
- `backend`: Contains the Node.js and Express.js backend server.
- `admin`: Contains the React application for the admin panel.

## Setup and Installation

To run this project, you will need to have Node.js and npm installed on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/Fang1331/Fullstack-Ecommerce.git
cd Fullstack-Ecommerce
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4. Install admin dependencies

```bash
cd ../admin
npm install
```

### 5. Create `.env` files

Create a `.env` file in each of the `backend`, `frontend`, and `admin` directories.

**Backend (`backend/.env`):**

```
PORT=4000
MONGO_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
```

**Frontend (`frontend/.env`):**

```
VITE_BACKEND_URL=http://localhost:4000
```

**Admin (`admin/.env`):**

```
VITE_BACKEND_URL=http://localhost:4000
```

### 6. Running the project

You will need to run the backend, frontend, and admin applications in separate terminals.

**To run the backend:**

```bash
cd backend
npm run server
```

**To run the frontend:**

```bash
cd frontend
npm run dev
```

**To run the admin panel:**

```bash
cd admin
npm run dev
```

The frontend will be available at `http://localhost:5173`, the admin panel at `http://localhost:5174`, and the backend server will be running on port `4000`.
