# Naksh Jewels - E-Commerce Mini Module

A full-stack e-commerce application built with React and Node.js, demonstrating clean code architecture, state management, and Docker containerization.

## 📋 Project Overview

This project is a mini e-commerce module featuring product listing, shopping cart functionality, and a RESTful API backend. It was built as part of the Naksh Jewels ReactJS & Node.js Internship Assessment.

## 🏗️ Tech Stack

### Frontend

- **React 19** - UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Routing
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling (no UI libraries)

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### DevOps

- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
Naksh-Jewels-Assessment/
├── Frontend/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── feature/             # Feature-based modules
│   │   │   ├── product/         # Product feature
│   │   │   └── shared/          # Shared components (Navbar)
│   │   ├── pages/               # Page components
│   │   ├── redux/               # Redux store and slices
│   │   ├── styles/              # CSS files
│   │   └── lib/                 # Providers and utilities
│   ├── Dockerfile
│   └── package.json
├── Backend/
│   ├── src/
│   │   ├── controllers/         # Request handlers
│   │   ├── routes/              # API routes
│   │   ├── middleware/          # Custom middleware
│   │   ├── data/                # Static data (products)
│   │   ├── utils/               # Utility functions
│   │   ├── app.js               # Express app configuration
│   │   └── server.js            # Server entry point
│   ├── Dockerfile
│   ├── .env                     # Environment variables
│   └── package.json
└── docker-compose.yml           # Docker orchestration
```

## ✨ Features

### Frontend Features

- ✅ **Product Listing Page** - Displays all available products
- ✅ **Product Cards** - Shows image, name, price, and Add to Cart button
- ✅ **Shopping Cart** - Full cart management with:
  - Add/remove items
  - Quantity updates (+/- buttons)
  - Total price calculation
  - Empty cart state
- ✅ **State Management** - Redux Toolkit for cart state
- ✅ **Responsive Design** - Mobile-first approach with media queries
- ✅ **Error Handling** - Loading states and error messages
- ✅ **Navigation** - React Router for page routing

### Backend Features

- ✅ **GET /products** - Fetch all products
- ✅ **POST /cart/add-card** - Add items to cart (with validation)
- ✅ **Validation Middleware** - Request validation for cart operations
- ✅ **Error Handling** - Centralized error handling middleware
- ✅ **In-Memory Data** - Product catalog stored in memory
- ✅ **Environment Variables** - Configuration via .env file

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose installed
- Git (for cloning the repository)

### Installation & Running with Docker (Recommended)

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Naksh-Jewels-Assessment
   ```

2. **Set up environment variables**

   Create a `.env` file in the `Backend` directory:

   ```env
   NODE_ENV=development
   PORT=5000
   ```

3. **Build and run with Docker Compose**

   ```bash
   docker-compose up --build
   ```

   This will:
   - Build both frontend and backend Docker images
   - Start the backend server on `http://localhost:5000`
   - Start the frontend dev server on `http://localhost:5173`

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

### Running Locally (Without Docker)

#### Backend Setup

1. **Navigate to Backend directory**

   ```bash
   cd Backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create .env file**

   ```env
   NODE_ENV=development
   PORT=5000
   ```

4. **Start the server**

   ```bash
   npm run dev    # Development mode with nodemon
   # or
   npm start      # Production mode
   ```

   Backend will run on `http://localhost:5000`

#### Frontend Setup

1. **Navigate to Frontend directory**

   ```bash
   cd Frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Update API base URL** (if needed)

   Edit `Frontend/src/redux/services/all-services.js`:

   ```javascript
   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" });
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### Products

#### GET /products

Fetch all available products.

**Response:**

```json
[
  {
    "id": "t1",
    "name": "Classic White T-Shirt",
    "price": 999,
    "image": "https://images.unsplash.com/...",
    "description": "Premium cotton white t-shirt..."
  }
]
```

### Cart

#### POST /cart

Add products to cart.

**Request Body:**

```json
{
  "products": [
    {
      "productId": "t1",
      "quantity": 2,
      "price": 999
    }
  ],
  "totalPrice": 1998
}
```

**Response:**

```json
{
  "message": "Cart updated successfully",
  "cart": [...],
  "totalPrice": 1998
}
```

**Validation:**

- `products` must be a non-empty array
- Each product must have `productId` (string), `quantity` (positive integer), and `price` (positive number)
- `totalPrice` must match the calculated total
- Product IDs must exist in the catalog

## 🎨 Frontend Architecture

### State Management

- **Redux Toolkit** - Used for cart state management
- **RTK Query** - Used for API calls (products fetching and cart submission)

### Component Structure

- **Functional Components Only** - All components use React hooks
- **Feature-Based Organization** - Components organized by feature
- **Reusable Components** - Loader, ProductCard, Navbar

### Styling

- **Custom CSS** - No UI libraries (Bootstrap, MUI, etc.)
- **CSS Variables** - Theme-based color system
- **Responsive Design** - Media queries for mobile, tablet, and desktop

## 🔧 Backend Architecture

### Project Structure

- **MVC Pattern** - Controllers, Routes, Middleware separation
- **Error Handling** - Centralized error handler middleware
- **Validation** - Request validation middleware
- **Async Handlers** - Wrapper for async route handlers

### Data Storage

- **In-Memory** - Products stored in a JavaScript array
- **Cart State** - Stored in memory (resets on server restart)

## 🐳 Docker Configuration

### Frontend Dockerfile

- Base image: `node:22-alpine`
- Exposes port: `5173`
- Runs: `npm run dev`

### Backend Dockerfile

- Base image: `node:22-alpine`
- Exposes port: `5000`
- Runs: `npm start`

### Docker Compose

- Orchestrates both services
- Sets up networking between containers
- Loads environment variables from `.env` file

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Desktop**: 4-column grid (1200px+)
- **Large Tablets**: 3-column grid (900px - 1200px)
- **Tablets**: 2-column grid (500px - 900px)
- **Mobile**: Single column (< 500px)

## 🧪 Testing the Application

1. **View Products**
   - Navigate to the home page
   - Browse available products

2. **Add to Cart**
   - Click "Add to Cart" on any product
   - Product badge shows "Added" status

3. **Manage Cart**
   - Click cart icon in navbar
   - Update quantities using +/- buttons
   - Remove items using "Remove" button
   - View total price

4. **Checkout**
   - Click "Checkout" button
   - Cart is submitted to backend
   - Success message displayed

## 📝 Code Quality

- ✅ Clean folder structure
- ✅ Meaningful component names
- ✅ Error handling throughout
- ✅ Loading states
- ✅ Empty states
- ✅ Responsive design
- ✅ No UI library dependencies
- ✅ Functional components only

## 🔍 Environment Variables

### Backend (.env)

```env
NODE_ENV=development
PORT=5000
```

## 📦 Dependencies

### Frontend

- `react` & `react-dom` - UI library
- `@reduxjs/toolkit` - State management
- `react-redux` - React bindings for Redux
- `react-router-dom` - Routing
- `vite` - Build tool

### Backend

- `express` - Web framework
- `cors` - CORS middleware
- `dotenv` - Environment variables

## 🚧 Known Limitations

- Cart data is stored in memory (lost on server restart)
- No user authentication
- No persistent database (using in-memory data)
- No payment integration

## 📄 License

This project was created for assessment purposes.

## 👤 Author

Built for Naksh Jewels Internship Assessment

---

**Note**: This project follows all the requirements specified in the assignment:

- ✅ React functional components only
- ✅ No UI libraries
- ✅ Redux for state management
- ✅ Express.js backend with validation
- ✅ Docker setup with docker-compose
- ✅ Clean code structure
- ✅ Error handling
- ✅ Responsive design
