## Pizza Project
A dynamic and fully functional e-commerce platform built using Next.js for selling pizzas. This project includes features like user authentication, product filtering, and a responsive design with a dark theme.

## Key Features
1. **Dark Theme**: User-friendly dark mode for better aesthetics and usability.

2. **Carousel**: Highlights featured products dynamically.

3. **User Authentication**:
   - Signup with existing user validation.
   - Login and Logout with secure JWT authentication.
4. **Cart and Checkout:**
   - Add multiple products with multiple quantities.
   - Seamless checkout flow.
5. **My Orders:**
   - View previous orders for every user.
   - Product Features:
   - Filter products by category.
   - Detailed product pages.
   - Add and delete products (admin only).
6. **Admin Panel:**
   - Manage products (Add/Delete).
7. **Database:**
   - MongoDB for data storage.
   - Mongoose for schema management.
8. **Static and Server-side Rendering:**
   - `getStaticProps` and `getServerSideProps` for improved performance and dynamic updates.

## Technologies Used

- **Frontend:**
   - Next.js
   - Tailwind CSS
Context API
- **Backend:**
   - Node.js
   - MongoDB
   - Mongoose
   - JSON Web Tokens (JWT)
- **APIs:**
   - Fetch API for communication between client and server.
- **Version Control:**
   - Git and GitHub.

**Setup Instructions**
Clone the repository:

```bash
git clone https://github.com/your-username/pizza-project.git
cd pizza-project
```
- **Install dependencies:**

```bash
npm install
```
- **Configure environment variables: Create a .env.local file in the root directory and add:**
``` env
MONGODB_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key
```
- **Start the development server:**

```bash
npm run dev
```
- **Build and run the production server:**

```bash
npm run build
npm start
```
## Project Structure
```
├── components          # Reusable React components
├── context             # Context API for global state management
├── pages               # Next.js pages
│   ├── api             # API routes
│   ├── admin           # Admin panel pages
│   ├── cart            # Cart and checkout pages
│   ├── myOrders        # Orders history
│   ├── product         # Product details
├── public              # Static assets
├── styles              # Global CSS and Tailwind configuration
├── utils               # Utility functions
└── README.md           # Project documentation
```

## Features Overview
 1. **Authentication:**

     - JWT-based authentication for secure login.
     - Protected routes for user-specific content (My Orders, Cart).
     - Validation to prevent duplicate signups.
     
 2. **Database Management:**

     - MongoDB for storing user data, products, and orders.
     - Mongoose for schema validation.
     
3. **Dynamic Routing:**

     - Product details fetched dynamically using getStaticProps.
     - Orders and Cart retrieved server-side using getServerSideProps.

4. **Product Management:**

     - Filter products by categories (e.g., Veg, Non-Veg, Beverages).
     - Admin can add and delete products directly.
       
5. **Responsive Design:**

     - Tailwind CSS for responsive and accessible UI.
     - Dark mode toggle integrated with Tailwind's dark theme support.
       
6. **Carousel:**
 
     - Highlights featured products on the homepage.
   
7. **Cart and Checkout:**

     - Add multiple items to the cart.
     - Update quantities and view the total cost dynamically.

## API Endpoints

1. **User Authentication**

     - `POST /api/auth/signup`: Register a new user.
     - `POST /api/auth/login`: Authenticate user and issue JWT.
     - `POST /api/auth/logout`: Invalidate JWT.
       
2. **Product Management**

     - `GET /api/products`: Fetch all products.
     - `POST /api/admin/add-product`: Add a new product (admin only).
     - `DELETE /api/admin/delete-product/:id`: Delete a product (admin only).
       
3. **Orders**

     - `GET /api/orders`: Retrieve user-specific orders.
     - `POST /api/orders`: Place a new order.
       
4. **Cart**

     - `POST /api/cart/add`: Add items to the cart.
     - `POST /api/cart/checkout`: Checkout and create an order.

## Admin Panel
   - Accessible via `/admin`.
   - Requires admin authentication.
   - Add and delete products directly from the UI.

## License
   - This project is licensed under the MIT License.

## GitHub Repository Details
   - Repository Name: pizza-project
   - Repository Description: A pizza ordering platform with authentication, cart, orders, and admin panel.
   - Public/Private: Public
   - Main Branch: main
   - README File: Include this documentation. 
