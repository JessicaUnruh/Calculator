let numbers = [], operations = [], container = [], i = 0, t = 0, numberButton, operationButton, result = 0, displayWindow = document.getElementById("displayWindow");
function collectInput(input) {
    console.log("pressed " + input);
    container[i] = input;
    displayWindow.innerText = container[i].toString();
    console.log(container);
    calculateExpression(container, i);
}
function calculateExpression(container, pos) {
    console.log("running calculateExpression");
    console.log("container check: " + pos + " " + container[pos]);
    console.log("typeof container pos " + typeof container[pos]);
    if (typeof container[pos] == "number") {
        if (typeof container[pos - 1] == "string") {
            console.log("previous was string, continue on");
        }
        else if (pos != 0) {
            container[pos] = Number(container[pos - 1].toString() + container[pos].toString());
            console.log("new pos is " + container[pos] + " typeof " + typeof container[pos]);
            console.log(container);
            i++;
            console.log("prev. value is " + container[pos - 1] + " and current value is " + container[pos]);
        }
    }
    else if (typeof container[pos] == "string") {
        switch (container[pos]) {
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
//# sourceMappingURL=calculator.js.map