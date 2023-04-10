// functionality for calculator:
// add, subtract, multiply, divide, equals, clear, numbers, decimals
// all can be used interchangeably

// future: use an array to store a set of numbers and operations for multi-number expressions
// save number to var, save operation, save number to var2, equals runs the function
// does basic add and subtract as it comes in order, but once multiply or divide are detected, does that first then add or subtract
// if multiply or divide are done in a row with nothing else, it equals each expression before continuing (even with the same operator)
// examples of order of operations:
// 5 + 2 * 9 = 5 + 18 = 23
// 5 * 2 * 4 = 10 * 4 = 40
// 5 * 2 / 5 = 10 / 5 = 2
// the user can add parenthesis to indicate the expression inside must be done first
// ex: 5 * 2 + (2 * 3) = 5 * 2 + 6 = 10 + 6

let numbers = [],
    operations = [],
    container = [],
    i: number = 0,
    t: number = 0,
    numberButton: number,
    operationButton: string,
    result: number = 0,
    displayWindow = document.getElementById("displayWindow");


function collectInput (input){
    // rules:
    // parentheses are not used as of now; we take them into account internally when doing operations
    // cannot log two operations in a row. ex: 5 + - 3 * /, etc.
    // if multiply or divide are inputted, complete in order of operations before accepting more inputs
    // ex: 5 + 2 * 9 - 3 --> 5 + 18 - 3 = 20
    // so when simple operations (add, subtract) are used, do them in order of input first to last.
    // if the user presses two or more numbers without an operation after, that number is a multi-digit number.
    // ^- let them input single digits, but each time a new one is inputted without an operator,
    // ^- combine the previous element with the new one. ex: [5, 6, +, 2] = [56, +, 2]


    console.log("pressed " + input);
    // storing inputs in container array
    container[i] = input;
    // displaying current input in the calculator screen
    displayWindow.innerText = container[i].toString();
    console.log(container);

    // need to check what input is being pressed to determine calculations
    // do in other function?
    calculateExpression(container, i);
}

function calculateExpression (container, pos){
    // pos is the position in the array, like i is
    console.log("running calculateExpression");
    console.log("container check: " + pos + " " + container[pos]);
    console.log("typeof container pos " + typeof container[pos]);


    if (typeof container[pos] == "number"){
        if (typeof container[pos-1] == "string"){
            console.log("previous was string, continue on");
        }
        else if (pos != 0){
            // combines two numbers together until new operation is detected
            container[pos] = Number(container[pos-1].toString() + container[pos].toString());
            console.log("new pos is " + container[pos] + " typeof " + typeof container[pos]);
            console.log(container);
            i++;
            console.log("prev. value is " + container[pos-1] + " and current value is " + container[pos]);
        }
    }
    else if (typeof container[pos] == "string"){
        // determines which operation is being used

        switch (container[pos]){
            case "add":
                console.log("starting add");
                break;
            case "subtract":
                console.log("starting subtract");
                break;
            case "multiply":
                console.log("starting multiply");
                break;
            case "divide":
                console.log("starting divide");
                break;
        }

    }
    else {
        console.log("else");
        console.log(container[pos]);
    }
}