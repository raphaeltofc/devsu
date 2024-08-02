# devsu
# E2E and API Automation Testing
## Project Overview
This project contains automated tests for two scenarios:
1. End-to-End (E2E) tests for a purchase flow on the [Demoblaze](https://demoblaze.com/) website.
2. API tests for user registration and login functionality on the [Demoblaze](https://www.demoblaze.com/) website.

## Prerequisites

- Node.js and npm installed on your machine
- Git installed on your machine

## Installation

1. Clone the repository from GitHub:
    ```sh
    git clone https://github.com/raphaeltofc/devsu/tree/dev
    cd devsu
    ```

2. Install the project dependencies:
    ```sh
    npm install
    ```

## Running the Tests

### E2E Tests

1. Open the Cypress Test Runner:
    ```sh
    npx cypress open
    ```

2. Select the E2E test spec file and run the tests.

### API Tests

1. Run the API tests using the Cypress Test Runner:
    ```sh
    npx cypress run --spec "cypress/e2e/apiTests.spec.js"
    ```

## Test Scenarios

### E2E Tests (SauceDemo)

1. **Authenticate with standard user credentials**
    - User: `standard_user`
    - Password: `secret_sauce`

2. **Add products to the cart**
    - Adds multiple products to the shopping cart.

3. **View the cart**
    - Opens the shopping cart to view added products.

4. **Complete the checkout form**
    - Fills out the checkout form with necessary details.

5. **Finish the purchase**
    - Completes the purchase and verifies the confirmation message: "THANK YOU FOR YOUR ORDER".

### API Tests (Demoblaze)

1. **Create a new user on signup**
    - Registers a new user with unique credentials.

2. **Fail to create a user that already exists**
    - Attempts to register a user with existing credentials and expects an error.

3. **Login with correct credentials**
    - Logs in using valid user credentials and verifies successful authentication.

4. **Login with incorrect credentials**
    - Attempts to log in with invalid credentials and verifies the error message "Wrong password.".

## Repository

You can find the repository with all the files, scripts, and test results on GitHub at the following URL:
[https://github.com/raphaeltofc/devsu/tree/dev](https://github.com/raphaeltofc/devsu/tree/dev)
