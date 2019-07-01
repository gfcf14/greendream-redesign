# GreenDream Redesign
This project is a redesign for the website https://www.greendreampg.com/

# Motivation
I have tried to keep my website up to date with code practices, but my limited knowledge then
would only allow me to develop it with jQuery and plain CSS. This project serves as a refactoring
and enhancement of the existing code to use the latest coding practices with React, SASS and ES6

# Tech used
Built with:
- React (CRA)
- Jest (Enzyme)
- Docker

# Installation
- Ensure you have Docker installed on your device
- Clone this repository
- Navigate to `server` folder and run `yarn install`. This will create a `node_modules` folder necessary for nodemon server run
- Navigate to `client` folder and run `yarn install`. This will create a `node_modules` folder that, though not necessary for running, enables testing
- Navigate back to root, and execute `docker-compose build` to prepare the `client` and `server` images

# Running
- Run `docker-compose up -d` in root folder. Then, open a browser window and navigate to `http://localhost:3000`

# Testing
- For Unit Testing, run `yarn test` inside the client folder
- For ESLint Testing, run `yarn run lint` inside the client folder
- For StyleLint Testing, run `yarn run stylelint` inside the client folder
