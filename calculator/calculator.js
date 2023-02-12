const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

// Handlers
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.post('/calculate', handleCalculate);

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// Handler functions
function handleCalculate(req, res) {
    let operator = req.body.operator;
    if (!validateOperator(operator)) {
        res.status(400).send('Invalid operator');
        return;
    }

    let a = parseInt(req.body.num1);
    let b = parseInt(req.body.num2);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid numbers');
        return;
    }

    operator = getOperator(operator);

    const result = operate(operator, a, b);
    res.status(200).send("The result is: " + result.toString());
}

// Helper functions
function validateOperator(operator) {
    return ['Add', 'Subtract', 'Multiply', 'Divide'].includes(operator);
}

function getOperator(operator) {
    switch (operator) {
        case 'Add':
            return add;
        case 'Subtract':
            return subtract;
        case 'Multiply':
            return multiply;
        case 'Divide':
            return divide;
    }
}

// Calculator functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}
