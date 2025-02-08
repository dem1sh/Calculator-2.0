const display = document.getElementById("display");
const defaultNumber = "0"; 


function appendToDisplay(input) {
    console.log("number button");
    if (display.value === defaultNumber) {
        display.value = input; 
    } else {
        display.value += input;
    }
}


function clearDisplay() {
    console.log("clear btn");
    display.value = defaultNumber; 
}


function calculate() {
    console.log("calculate btn");

    try {
        let result = eval(display.value); 

        if (!isNaN(result)) { 
            result = parseFloat(result.toFixed(2)); 
            display.value = result; 
        } else {
            display.value = "Error"; 
        }
    } catch (error) {
        console.error("Calculation error:", error); 
        display.value = "Error"; 
    }
}
