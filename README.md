# Gorest API CRUD Operations - Playwright Test Automation

This project automates testing for the Gorest API, covering CRUD (Create, Read, Update, Delete) operations on users.

## Table of Contents

- [Project Overview](#project-overview)
- [How to Test APIs](#how-to-test-apis)
- [Test Structure](#test-structure)
- [Running the Tests](#running-the-tests)
- [Test Data Structure](#test-data-structure)
- [Environment Setup](#environment-setup)
- [Test Results](#test-results)

## Project Overview

This project uses **Playwright** for API testing. It performs CRUD operations on the Gorest API's `/users` endpoint. Each operation is tested in isolation, and the results of one operation (like creating a user) are used in subsequent operations (like reading, updating, and deleting that user).

The tests are written to be maintainable and reusable for further additions or updates.

## How to Test APIs

API testing is done by simulating HTTP requests (GET, POST, PUT, DELETE) to the API endpoints using Playwright’s `request` API. Here’s a breakdown of each test:

### 1. **Create a User**

- **HTTP Method:** POST
- **Endpoint:** `/v2/users`
- **Purpose:** Create a new user with the provided data and store the `userId` from the response for further tests.
  
### 2. **Read the Created User**

- **HTTP Method:** GET
- **Endpoint:** `/v2/users/{userId}`
- **Purpose:** Retrieve the details of the user created in the previous step using the `userId` stored during the user creation process.

### 3. **Update the User**

- **HTTP Method:** PUT
- **Endpoint:** `/v2/users/{userId}`
- **Purpose:** Update the user's status to `inactive`.

### 4. **Delete the User**

- **HTTP Method:** DELETE
- **Endpoint:** `/v2/users/{userId}`
- **Purpose:** Delete the user and confirm that the user no longer exists by attempting a GET request to the same user endpoint.

## Test Structure

To ensure maintainability and reusability, tests are organized as follows:

1. **Fixtures:** API request data such as `createUser` is stored in a separate `testData.json` file under the `fixtures` folder. This keeps test data clean and modular.
2. **Tests:** Test cases for CRUD operations are written inside the `tests` folder. Each test focuses on a specific CRUD operation.
3. **Global Variables:** The `userId` is stored globally in the test file to be used across tests. It’s populated during the creation of the user and used in subsequent operations (read, update, delete).
4. **Assertions:** After each request, assertions are made to ensure the response status and the returned data match expectations.

## Running the Tests

To run the tests, follow these steps:

### 1. Install Dependencies
Make sure you have **Node.js** installed. If not, download and install it from [here](https://nodejs.org/).

After installing Node.js, run the following command to install the necessary dependencies:

``npm install 

### 2. Run the Tests 

```bash 
npm playwright test





