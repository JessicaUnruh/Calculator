// functionality for calculator:
// add, subtract, multiply, divide, equals, clear, numbers, decimals
// all can be used interchangeably

// user can input number only
// check for if input is number; if not they must re-enter the input

let number: number = 0,
    buttonPress: number,
    operationButton: string,
    result: number;

function caculateExpression(number){
    switch (operationButton){
        case operationButton = "add":
            result == number + buttonPress;
            console.log(result);

        case operationButton = "subtract":
            result == number - buttonPress;
            console.log(result);

        case operationButton = "multiply":
            result == number * buttonPress;
            console.log(result);
            
        case operationButton = "divide":
            result == number / buttonPress;
            console.log(result);

        
    }
}