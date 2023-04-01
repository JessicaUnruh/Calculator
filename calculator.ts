// functionality for calculator:
// add, subtract, multiply, divide, equals, clear, numbers, decimals
// all can be used interchangeably

// user can input number only
// check for if input is number; if not they must re-enter the input

let number: number = 0,
    numberButton: number,
    operationButton: string,
    result: number;


function setNumber (input){
    console.log("pressed " + input);
    console.log(typeof numberButton);
    numberButton = input;
    console.log(typeof numberButton);
}

function setOperator (input){
    console.log("pressed " + input);
    console.log(typeof operationButton);
    operationButton = input;
    console.log(typeof operationButton);
}


function caculateExpression(numberButton, operationButton){
    // result is what is saved
    // new expression means result is 0
    // continued expression means result is some number
    // result == result + numberButton
    // numberButton is pressed button with a number value
    // say we have multiple values to add
    // we need to add continuously as "Add" button is pressed
    // 0 + 5 = 5 + 5 = 10 + 2 = 12, etc.
    // r + nB = r + nB = r + nB = r, etc.

    // we're taking in two parameters: numberButton and operationButton
    // numberButton tells us what number to operate with
    // operationButton tells us what to do with our numbers
    switch (operationButton){
        case operationButton = "add":
            result == number + numberButton;
            console.log(result);

        case operationButton = "subtract":
            result == number - numberButton;
            console.log(result);

        case operationButton = "multiply":
            result == number * numberButton;
            console.log(result);
            
        case operationButton = "divide":
            result == number / numberButton;
            console.log(result);

        
    }
}