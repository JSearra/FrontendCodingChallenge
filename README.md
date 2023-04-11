# Bike24challenge


Project Overview
----------------

This Angular application provides a simple shopping cart experience, allowing users to select products, adjust quantities, view their cart, and make a purchase. The application consists of two main components and two services to manage product data and shopping cart data.

### Components

#### 1\. ProductSelectionComponent

`ProductSelectionComponent` is responsible for displaying the available products and allowing users to select a product, choose the desired quantity, and add the item to their shopping cart.

*   **Functionality**:
    *   Displays a dropdown list of available products with their prices.
    *   Allows users to select a product and set the quantity.
    *   Adds the selected product and quantity to the shopping cart.
    *   Prevents users from adding more than the maximum allowed quantity for a product.
    *   Displays an alert if the cart is full.

#### 2\. ShoppingCartComponent

`ShoppingCartComponent` is responsible for displaying the user's shopping cart, including all products, their quantities, and the total cost. Users can remove individual items from the cart, clear the entire cart, and confirm their purchase.

*   **Functionality**:
    *   Displays the user's shopping cart with product names, quantities, and individual prices.
    *   Shows the total cost of the cart.
    *   Allows users to remove items from the cart individually.
    *   Allows users to clear the entire cart.
    *   Displays a progress bar indicating the number of different products in the cart.
    *   Shows a confirmation modal upon purchase.
    *   Displays a message below the table if the cart is full.

### Services

#### 1\. ProductService

`ProductService` is responsible for managing product data, including fetching the product list from the `products.json` file.

*   **Functionality**:
    *   Retrieves product data from the `products.json` file.
    *   Provides a method to get the list of products.

#### 2\. CartService

`CartService` is responsible for managing the shopping cart data, including adding and removing items, calculating totals, and checking if the cart is full.

*   **Functionality**:
    *   Stores the shopping cart data in a private variable.
    *   Provides methods to add, remove, and clear items in the shopping cart.
    *   Calculates the total cost and total quantity of items in the cart.
    *   Checks if the cart is full (maximum of 10 different products).

With this documentation, you should have a better understanding of the structure and functionality of the Angular shopping cart application.




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

After cloning the repository, run `npm install`. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


