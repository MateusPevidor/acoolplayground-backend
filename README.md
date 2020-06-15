# A Cool Playground - Backend

[A Cool Playground - Frontend](https://github.com/MateusPevidor/acoolplayground-frontend)

## Overview
This is a programming challenge splitted into four main challenges:

[1. Palindrome listing](#palindrome-listing)<br>
[2. Transaction change calculator](#transaction-change-calculator)<br>
[3. Vehicle registering](#vehicle-registering)<br>
[4. Zip code lookup](#zip-code-lookup)

## How to run
In the root folder run:

1. ``npm i`` or ``yarn`` to download dependencies.<br>
2. ``npm run dev:server`` or ``yarn dev:server`` to run.

## Development
This application was Test-Driven developed using [Jest](https://jestjs.io/), [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/).

### Dependencies
[Express](https://www.npmjs.com/package/express) - Tool for HTTP server creation.<br>
[Axios](https://www.npmjs.com/package/axios) - External API calls.<br>
[uuidv4](https://www.npmjs.com/package/axios) - UUID generation.

### General workflow
![Workflow](https://i.imgur.com/2oaQE34.png)
- Backend receives a request from the frontend.
- The respective controller method is called, which runs the service for handling the request data.
- The called service handles the data, applying the business rule for the type of request.
- Data is returned to frontend.

### Challenges
#### Palindrome listing
Given an interval, list all palindromes within it.

The solution applied to solve this problem was to convert each number into a string, reverse it, turn it back into a number, then subtract it from the original number. If the result is equals to 0, the number is a palindrome.

#### Transaction change calculator
Given a total value for a transaction and the amount received for the payment, calculate the **minimum** amount of $100, $10 and $1 banknotes needed for change.

This solution consists of using the division of integers and modular arithmetic. The total change is divided by 100, then it is overwritten by the modulus of 100. This process is repeated for 10 and 1.

#### Vehicle registering
Using TypeScript, recreate the following structure with Interfaces and Classes:

It must be able to insert a new vehicle into a JSON file and list all registered vehicles.

![Class Diagram](https://imgur.com/RdubdLc.png)

This problem was solved by using the [Node.js File System](https://nodejs.org/api/fs.html) for reading and writing data to a JSON file. Each vehicle has an UUID assigned to it.

#### Zip code lookup
Given 5 Zip codes, use the [ViaCEP](https://viacep.com.br/)'s public API to retrieve address information from them.

The solution for this problem used the HTTP client [Axios](https://www.npmjs.com/package/axios) to make requests to the external API.

## References
- [Three Ways to Reverse a String in JavaScript](https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)
