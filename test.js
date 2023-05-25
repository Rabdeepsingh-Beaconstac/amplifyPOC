// Require the 'dotenv' package if using it
require('dotenv').config();

// Access the environment variable
const myVariable = process.env.FRONTEND_PASSWORD;
console.log(myVariable);