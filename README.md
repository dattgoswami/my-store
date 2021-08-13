# MyStore

MyStore is a front-end for a single page e-commerce application, that currently reads the data from the data.json file stored under assets. The home page displays all the products that are available and on clicking the image users can go to the product details page. Once the selection is made and products are added to the cart, the user can check the items in the cart and enter their details and place the order.
The key components are product-list (has a child component producr-item which deals with single products) and cart. The other two components are product-item-detail(which is used to view the description of the product) and the order confirmation page.  
The entities for the model are the Product entity and the combination of Product and their quantity which is used for cart related functionalities.
The services include the cart service which deals with everything related to the cart, product service which is responsible for fetching the data from the file and the product-item-detail service that is used to share data between the product-item component and the product-item-detail.

## Development server

Run `ng serve -o` for a dev server. This will open the application in your browser at `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
