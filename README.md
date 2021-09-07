# MyStoreFrontendAngular

This project is to build front-end web page for an e-commerce shop using Angular.

## What you get:

### Home Page:

- Users can indicate the quantity of desired items and add them to their cart.
- Users can also click on the image of the item to see more details. The app will navigate to Product Detail Page

### Product Detail Page: `/product/:id`

- Users can indicate the quantity of desired items and add them to their cart. If they have indicated the quantity in Home Page screen, the value will be reflected here as well.
- The quantity Users select here will be reflected in the Home Page if users ever navigate back.

### Cart: `/cart`

- Users can change the quantity of desired items or reomve the item from their cart.
- If the quantity is deducted to 0, it will be automatically remove from the cart.
- Users can observe the total price calculated as they adjust the quantity of each item in the cart.
- Finally, users can check out once they are ready.

### Confirmation: `/confirmation`

- User will be able to see their order list and total price.
- They are required to fill in personal info to complete the order.
- The page changes to final confirmation once users submit their order.

## Get started:

Run `npm install` and then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
